<?php

$db = mysqli_connect('localhost', 'root', '', 'airtickets');

$requestMethod = $_SERVER['REQUEST_METHOD'];

if ($requestMethod == 'POST') {
  $destination = $_GET['destination'];
  $date_of_departure = $_GET['date_of_departure'];
  $price = $_GET['price'];
  $query = "INSERT INTO
		tickets (destination,date_of_departure,price) VALUES ('$destination','$date_of_departure','$price')";
	mysqli_query($db,$query);
}
else if ($requestMethod == 'GET') {
  $id = $_GET['id'];
  if(is_numeric($id)){
    $result = mysqli_query($db, "SELECT * FROM tickets WHERE id=$id");
    while ($row = mysqli_fetch_array($result)) {
      $rows[] = array($row);
    }
    echo json_encode($rows);
  }
  if($id == NULL){
    $result = mysqli_query($db, "SELECT * FROM tickets");
    while ($row = mysqli_fetch_array($result)) {
      $rows[] = array($row);
    }
    echo json_encode($rows);
  }
}
else if ($requestMethod == 'PUT') { // UPDATE
  $argv = $_SERVER['argv'];
  $string = $argv[0];

  $position = strpos($string, '&');
  $id = substr($string, 0, $position);
  $position++;
  $string = substr($string, $position, strlen($string) - 1);
  $position = strpos($id, '=');
  $position++;
  $id=substr($id, $position, strlen($id) - 1);

  $position = strpos($string, '&');
  $destination = substr($string, 0, $position);
  $position++;
  $string = substr($string, $position, strlen($string) - 1);
  $position = strpos($destination, '=');
  $position++;
  $destination = substr($destination, $position, strlen($destination) - 1);

  $position = strpos($string, '&');
  $date_of_departure=substr($string, 0, $position);
  $position++;
  $string = substr($string, $position, strlen($string) - 1);
  $position = strpos($date_of_departure, '=');
  $position++;
  $date_of_departure = substr($date_of_departure, $position, strlen($date_of_departure) - 1);

  $price = $string;
  $position = strpos($price, '=');
  $position++;
  $price = substr($price, $position, strlen($price) - 1);

  mysqli_query($db, "UPDATE tickets SET destination='$destination', date_of_departure='$date_of_departure' , price='$price'  WHERE id=$id");
  $message = array ('status'=>"the change was successful");
  echo json_encode($message);
}
else if ($requestMethod == 'DELETE') { // DELETE
  $argv = $_SERVER['argv'];
  $id = $argv[0];
  if(is_numeric($id)){
    mysqli_query($db, "DELETE FROM tickets WHERE id=$id");
    $message = array ('status'=>"the removal was successful");
    echo json_encode($message);
  }
}

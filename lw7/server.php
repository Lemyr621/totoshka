<?php
session_start();

  $destination="";
	$date_of_departure= "";
	$price= "";
	$id=0;
	$edit_state=false;
	$db = mysqli_connect('localhost', 'root', '', 'airtickets');

	if(isset($_POST['save'])){
		$destination= $_POST['destination'];
		$date_of_departure= $_POST['date_of_departure'];
		$price= $_POST['price'];

		$query="INSERT INTO
			tickets (destination,date_of_departure,price) VALUES ('$destination','$date_of_departure','$price')";
			mysqli_query($db,$query);
			$_SESSION['msg'] = "Ticket saved";
			header('location: index.php');
	}

	if(isset($_POST['update'])){
		$destination = $_POST['destination'];
		$date_of_departure=$_POST['date_of_departure'];
		$price=$_POST['price'];
		$id= $_POST['id'];

		mysqli_query($db, "UPDATE tickets SET destination='$destination', date_of_departure='$date_of_departure' , price='$price'  WHERE id=$id");
		$_SESSION['msg'] = "Ticket update";
		header('location: index.php');
	}

	if(isset($_GET['del'])){
		$id= $_GET['del'];

		mysqli_query($db, "DELETE FROM tickets WHERE id=$id");
		$_SESSION['msg'] = "Ticket deleted";
		header('location: index.php');
	}

	$results = mysqli_query($db, "SELECT * FROM tickets")

	?>

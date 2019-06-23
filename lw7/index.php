<?php include('server.php');
	if(isset($_GET['edit'])){
		$id = $_GET['edit'];
		$edit_state = true;
		$rec = mysqli_query($db, "SELECT * FROM tickets WHERE id=$id");
		$record = mysqli_fetch_array($rec);
		$destination= $record['destination'];
		$date_of_departure= $record['date_of_departure'];
		$price= $record['price'];
		$id= $record['id'];
	}
 ?>
<!DOCTYPE html>
<html>
<head>
	<title>CRUD</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
<?php if (isset($_SESSION['msg'])): ?>
	<div class="msg">
		<?php
			echo $_SESSION['msg'];
			unset($_SESSION['msg']);
		?>
	</div>
<?php endif ?>

	<table>
		<thead>
			<tr>
				<th>destination</th>
				<th>date_of_departure</th>
				<th>price</th>
				<th colspan="3">Action</th>
			</tr>
		<thead>
		<tbody>
			<?php while ($row = mysqli_fetch_array($results)){ ?>
				<tr>
					<td><?php echo $row['destination'] ?></td>
					<td><?php echo $row['date_of_departure'] ?></td>
					<td><?php echo $row['price'] ?></td>
					<td>
						<a class="edit_btn" href="index.php?edit=<?php echo $row['id']; ?> ">Edit</a>
					</td>
					<td>
						<a class="del_btn" href="server.php?del=<?php echo $row['id']; ?> ">Delete</a>
					</td>
				</tr>
			<?php } ?>
		</tbody>
	</table>
	<form method="post" action="server.php">
		<input type="hiden" name="id" value="<?php echo $id; ?>">
		<div class="input-group">
			<label>destination</label>
			<input type="text" name="destination" value="<?php echo $destination ?>">
		</div>
		<div class="input-group">
			<label>date_of_departure</label>
			<input type="text" name="date_of_departure" value="<?php echo $date_of_departure; ?>">
		</div>
		<div class="input-group">
			<label>price</label>
			<input type="text" name="price" value="<?php echo $price; ?>">
		</div>
		<div class="input-group">
			<?php if ($edit_state == false): ?>
				<button type="submit" name="save" class="btn">Save</button>
			<?php else: ?>
				<button type="submit" name="update" class="btn">Update</button>
			<?php endif ?>

		</div>
	</form>
</body>
</html>

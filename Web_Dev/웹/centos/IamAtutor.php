<?php
session_start();
$DATABASE_HOST = '34.66.52.207';
$DATABASE_USER = 'dbaccess';
$DATABASE_PASS = '0000';
$DATABASE_NAME = 'TEMS_SQL_Point';
// Try and connect using the info above.
$con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
if ( mysqli_connect_errno() ) {
	// If there is an error with the connection, stop the script and display the error.
	exit('Failed to connect to MySQL: ' . mysqli_connect_error());
}
// Now we check if the data from the login form was submitted, isset() will check if the data exists.
if ( !isset($_POST['username'], $_POST['password']) ) {
	// Could not get the data that should have been sent.
	exit('Please fill both the username and password fields!');
}
// Prepare our SQL, preparing the SQL statement will prevent SQL injection.
if ($stmt = $con->prepare('SELECT id, password FROM Login WHERE username = ?')) {
	// Bind parameters (s = string, i = int, b = blob, etc), in our case the username is a string so we use "s"
	$stmt->bind_param('s', $_POST['username']);
	$stmt->execute();
	// Store the result so we can check if the account exists in the database.
	$stmt->store_result();
  if ($stmt->num_rows > 0) {
  	$stmt->bind_result($id, $password);
  	$stmt->fetch();
  	// Account exists, now we verify the password.
  	// Note: remember to use password_hash in your registration file to store the hashed passwords.
  	if ($_POST['password'] === $password) {
  		// Verification success! User has loggedin!
  		// Create sessions so we know the user is logged in, they basically act like cookies but remember the data on the server.
  		session_regenerate_id();
  		$_SESSION['loggedin'] = TRUE;
  		$_SESSION['name'] = $_POST['username'];
  		$_SESSION['id'] = $id;
  		echo 'Welcome ' . $_SESSION['name'] . '!';
      header("Location: GivePointToStudents.php");
  	} else {
			echo '<!DOCTYPE html><HEAD><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" type="text/css" href="IamAtutorFailed.css"><TITLE>Main Console</TITLE><link rel="icon" type="image/ico" href="https://storage.googleapis.com/tems_point_system_image_storage_2/TitleImg.png" /></HEAD><BODY><center><div class="topnav"><a  href="IamAtutor.html">Main Console</a><a href="html_table_sql.php">Ranking Board</a><a class="active" href="">Login Failed</a></div></center><center>';
			echo '<h1>Incorrect password!</h1><br>';
			echo '<h1><a href="IamAtutor.html">Retry Login</a></h1>';
			echo '</center><div class="footer"><p>&copy; Copyright <script type="text/javascript">var d = new Date();document.write(d.getFullYear())</script>, Canada TEMS Academy<br><img src="https://storage.googleapis.com/tems_point_system_image_storage_2/52dee1_8a31d53908ce2a3ee4eb3194319ff85b.png" width="80px" alt="TEMS LOGO"></p><p align="right" class="ex1">Webpage created by Hongjun Yun<br>hongjun.yun@icloud.com</p></div></BODY></HTML>';

  	}
  } else {
		echo '<!DOCTYPE html><HEAD><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" type="text/css" href="IamAtutorFailed.css"><TITLE>Main Console</TITLE><link rel="icon" type="image/ico" href="https://storage.googleapis.com/tems_point_system_image_storage_2/TitleImg.png" /></HEAD><BODY><center><div class="topnav"><a  href="IamAtutor.html">Main Console</a><a href="html_table_sql.php">Ranking Board</a><a class="active" href="">Login Failed</a></div></center><center>';
		echo '<h1>Incorrect username!</h1><br>';
		echo '<h1><a href="IamAtutor.html">Retry Login</a></h1>';
		echo '</center><div class="footer"><p>&copy; Copyright <script type="text/javascript">var d = new Date();document.write(d.getFullYear())</script>, Canada TEMS Academy<br><img src="https://storage.googleapis.com/tems_point_system_image_storage_2/52dee1_8a31d53908ce2a3ee4eb3194319ff85b.png" width="80px" alt="TEMS LOGO"></p><p align="right" class="ex1">Webpage created by Hongjun Yun<br>hongjun.yun@icloud.com</p></div></BODY></HTML>';

  }

	$stmt->close();
}
?>

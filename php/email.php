<?php

include('../../db_script/login.php');

$db = new PDO('mysql:host=localhost;dbname=bristleb_starter;charset=utf8', 
			  USER,
			  PASS, 
			  array(PDO::ATTR_EMULATE_PREPARES => false, 
			  	    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

$f_name = $_POST['f_name'];
$l_name = $_POST['l_name'];
$email  = $_POST['email'];
$zip    = $_POST['zip'];

$stmt = $db->prepare("INSERT INTO customers(fname,lname,email,zip) VALUES(:fname,:lname,:email,:zip)");
$stmt->execute(array(':fname' => $f_name, ':lname' => $l_name, ':email' => $email, ':zip' => $zip));
$affected_rows = $stmt->rowCount();

echo "Form submitted successfully!";

$db = null;

?>
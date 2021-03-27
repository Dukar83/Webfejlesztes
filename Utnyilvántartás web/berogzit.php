<?php
session_start();
$mysqli = new mysqli('127.0.0.1','root','','utnyilvantartas');

if ($mysqli -> connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
  }

$userID = $_SESSION['userID'];
$datum = $_POST['datum'];
$honnan = $_POST['honnan'];
$hova = $_POST['hova'];
$km = $_POST['km'];

echo $userID.'<br>';
echo $datum.'<br>';
echo $honnan.'<br>';
echo $hova.'<br>';
echo $km.'<br>';

 $beiratas = mysqli_query($mysqli,"INSERT INTO `utak`(`ID_user`, `Datum`, `Honnan`, `Hova`, `km`) VALUES ('$userID','$datum','$honnan','$hova','$km')");

    $mysqli -> close();
    header('location:kimut.php');
?>
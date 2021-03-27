<?php
session_start();
$mysqli = new mysqli('127.0.0.1','root','','utnyilvantartas');

if ($mysqli -> connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
  }

$username = $_POST["username"];
$password = $_POST["password"];

$ellenorzes = mysqli_query($mysqli,"SELECT * FROM `users` WHERE `Nev` = '$username' AND `Jelszo` = '$password'");
$talaltSorok = mysqli_num_rows($ellenorzes);

if ($talaltSorok == 1){
    $_SESSION['username'] = $username;

    $userIDkiszedes = mysqli_query($mysqli,"SELECT ID_user FROM `users` WHERE `Nev` = '$username' AND `Jelszo` = '$password'");
    $_SESSION['userID'] = mysqli_fetch_assoc($userIDkiszedes)['ID_user'];
    $mysqli -> close();
    header('location:rogzit.php');
  }
  else {
    session_start();
    $_SESSION['belephiba'] = "Rossz felhasználónév vagy jelszó, próbálkozz újra!";
    header('location:index.php');
    $mysqli -> close();
  }
?>
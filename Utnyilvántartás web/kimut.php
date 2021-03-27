<?php
session_start();

$mysqli = new mysqli('127.0.0.1','root','','utnyilvantartas');

if ($mysqli -> connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Útnyilvántartás</title>
</head>
<body style="background-color:grey">

<div style="text-align:center">
<br>Dátum alapján listázunk<br><br>
<a href="index.php">Index</a>
<a href="kimut.php">Kimut</a>
<a href="rogzit.php">Rogzit</a>
</div>
<br><br><br>

<form action="" method="POST" style="text-align:center">
Dátum: <input type="date" name="datum" id="datum">
<input type="submit" value="Szürés" name="submit" id="submit">
</form>

<div style="text-align:center"><br>
<?php
if (isset($_POST['datum'])) {
    $datum = $_POST['datum'];
    $userID = $_SESSION['userID'];

    $kiIratas = mysqli_query($mysqli,"SELECT Honnan FROM utak WHERE `ID_user` = '$userID' AND `Datum` = '$datum' ");
    echo 'Honnan: '.mysqli_fetch_assoc($kiIratas)['Honnan'];

    $kiIratas2 = mysqli_query($mysqli,"SELECT Hova FROM utak WHERE `ID_user` = '$userID' AND `Datum` = '$datum' ");
    echo '<br>Hová:'.mysqli_fetch_assoc($kiIratas2)['Hova'];

    $mysqli -> close();
}
?>
</div>

</body>
</html>
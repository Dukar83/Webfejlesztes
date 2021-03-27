<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bootsrip.css">
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery-3.2.1.min.js"></script>
    <title>Útnyilvántartás</title>
</head>
<body style="background-color:grey">

    <br><br><br>
    <form action="ellenoriz.php" method="POST" style="text-align:center">
    Név:<input type="text" name="username" id="username" require><br>
    Jelszó:<input type="password" name="password" id="password" require><br>
    <input type="submit" value="belépés" name="submit" id="submit"><br><br><br>
    </form>

<?php
session_start();
if (isset($_SESSION['belephiba'])) {
    echo $_SESSION['belephiba'];
}
?>

</body>
</html>
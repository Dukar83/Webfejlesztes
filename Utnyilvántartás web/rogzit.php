<?php
session_start();
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
<br><br> 
<a href="index.php">Index</a>
<a href="kimut.php">Kimut</a>
<a href="rogzit.php">Rogzit</a>
</div>

<br><br>

<form action="berogzit.php" method="POST" style="text-align:center">
Dátum:<input type="date" name="datum" id="datum" value="curdate()" require><br>
Honnan:<input type="text" name="honnan" id="honnan" require minlength="3"><br>
Hová:<input type="text" name="hova" id="hova" require minlength="3"><br>
Km:<input type="number" name="km" id="km" require><br><br>
<input type="submit" value="Elküldés" name="submit" id="submit">
</form>

</body>
</html>
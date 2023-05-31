<?php
$q1 = $_POST['rating1'];
$q2 = $_POST['rating2'];
$q3 = $_POST['rating3'];
$q4 = $_POST['rating4'];
$q5 = $_POST['rating5'];
$comentario = $_POST['cmt1'];

$host = 'localhost';
$username = 'root';
$password = '12499183';
$dbname = 'pi';
$conn = mysqli_connect($host, $username, $password, $dbname);


if (mysqli_connect_error()) {
    die("Falha na conexão ao MySQL: " . mysqli_connect_error());
}

$sql = "INSERT INTO respostas (q1,q2, q3, q4, q5, 'comentario')
        VALUES ('$q1', '$q2', $q3, '$q4', '$q5', '$comentario')";

if (mysqli_query($conn, $sql)) {
    echo "Sucesso inserção";
} else {
    echo "falha ao inserir " . mysqli_error($conn);
}


mysqli_close($conn);
?>
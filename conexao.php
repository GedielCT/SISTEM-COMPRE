<?php

$hostname = "localhost";
$bancodedados = "sistemcompre";
$usuario = "root";
$senha = "";

$mysqli = new mysqli($hostname, $usuario, $senha, $bancodedados);
if ($mysqli->connect_errno) {
    echo "Falha ao conectar: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
else {
    // Exemplo de consulta
    $sql = "SELECT * FROM cadastro_produto";
    $result = $mysqli->query($sql);

    if ($result) {
        while ($row = $result->fetch_assoc()) {
            echo "Codigo: " . $row['codigo'] . " - Quantidade: " . $row['quantidade'] . "<br>";
        }
    } else {
        echo "Erro na consulta: " . $mysqli->error;
    }
}   

?>
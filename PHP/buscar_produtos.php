<?php
$hostname = "localhost";
$bancodedados = "sistemcompre";
$usuario = "root";
$senha = "";

$mysqli = new mysqli($hostname, $usuario, $senha, $bancodedados);
if ($mysqli->connect_errno) {
    http_response_code(500);
    echo json_encode(["erro" => "Falha ao conectar"]);
    exit;
}

$sql = "SELECT codigo, quantidade, valor_unitario, nome_produto, marca_produto, categoria FROM produto";
$result = $mysqli->query($sql);

$produtos = [];
if ($result) {
    while ($row = $result->fetch_assoc()) {
        $produtos[] = $row;
    }
}
header('Content-Type: application/json');
echo json_encode($produtos);
?>
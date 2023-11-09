<?php
extract($_POST);
require('connect.php');

$busca = mysqli_query($con, "Select * from `tb_clientes` where `email` = '$email' ");
@session_start();

$msg = "";
$destino = "";

if ($busca->num_rows == 1) {
    $cliente = mysqli_fetch_array($busca);
    if ($cliente['senha'] == md5($senha)) {
        $_SESSION['logado'] = true;
        $_SESSION['nome'] = $cliente[`nome`];
        $destino = "location:screenHome.php";
    } else {
        $msg = "Senha incorreta!";
        $destino = "location:loginteste.php";
    }
} else {
    $destino = "location:loginteste.php";
    $msg = "Cadastro não existe!";
}
$_SESSION['msg'] = $msg;
header($destino);
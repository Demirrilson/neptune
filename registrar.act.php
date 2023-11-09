<?php
@session_start();

extract($_POST);

require('connect.php');

$senha = md5($senha);

if (!empty($nome) && !empty($email) && !empty($senha)) {

    mysqli_query($con, "INSERT INTO `tb_clientes`
    (`cod_cliente`, `nome`, `email`, `senha`)
    VALUES (NULL, '$nome', '$email', '$senha');");

    $_SESSION['resposta'] = "<p>Cadastro realizado com sucesso!</p>";
    header("location:loginteste.php");
} else {
    $_SESSION['resposta'] = "<p>Erro: Todos os campos são obrigatórios.</p>";
    header("location:loginteste.php");
}
?>
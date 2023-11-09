<?php

extract($_POST);
extract($_FILES);

require('connect.php');


mysqli_query($con, "INSERT INTO `tb_produto`
    (`email`, `senha`)
    VALUES ('$email', '$nome_arquivo');");
    
    $_SESSION['resposta'] = "<p>Cadastro realizado com sucesso!</p>";
    header("location:addProd.php");
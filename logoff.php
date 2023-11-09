<?php
session_start();
$_SESSION['logado'] = false;
unset($_SESSION['logado']);
session_destroy();
header("location:logintest.php");

?>
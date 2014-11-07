<?php
/**
 * Created by PhpStorm.
 * User: Andrey
 * Date: 30.09.14
 * Time: 1:00
 */
sleep(0.3);
$example = $_POST["request"];
var_dump($_POST["request"]);
$example = json_decode($example, false);


echo json_encode($example);
die();

<?php

$recepient = "mykola9595@gmail.com";
$sitename = "Название сайта";

$name = trim($_GET["name"]);
$email = trim($_GET["email"]);



$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nПочта: $email;
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
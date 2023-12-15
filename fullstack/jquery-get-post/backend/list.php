<?php

try{
    $db = new PDO("mysql:host=localhost;dbname=jquery;charset=utf8","root","");
 }catch(PDOExecepiton $e) {
  echo $e->getMessage();
  die();
 }

 $list = $db->query("SELECT * from list")->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($list);
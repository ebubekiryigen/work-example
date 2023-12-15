<?php
header('Access-Control-Allow-Origin: *');

if(isset($_POST['full_name']) && isset($_POST['email']) && isset($_POST['phone'])){

   try{
      $db = new PDO("mysql:host=localhost;dbname=jquery;charset=utf8","root","");
   }catch(PDOExecepiton $e) {
    echo $e->getMessage();
    die();
   }

   $prepare = $db->prepare("INSERT INTO list SET full_name = :full_name, email = :email, phone = :phone");
   $insert  = $prepare->execute(array(
    "full_name"  => $_POST["full_name"],
    "email"      => $_POST["email"],
    "phone"      => $_POST["phone"]
    ));


   echo $insert;

}

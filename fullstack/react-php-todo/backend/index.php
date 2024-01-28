<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
 try{
    $db = new PDO('mysql:host=localhost;dbname=todo', 'root', '');
 } catch(PDOException $e) {
    die($e->getMessage());
 }

 
 $action = $_POST['action'];
 $response = [];
 
 switch($action) {
    case 'todo':
        $response = $db->query('select * from todos order by id desc')->fetchAll(PDO::FETCH_ASSOC);
    break;
    case 'add-todo':
        $todo = $_POST['todo'];
        $data = [
            'todo' => $todo,
            'done' => 0
        ];
        $query = $db->prepare('INSERT INTO todos SET todo = :todo, done=:done');
        $insert = $query-> execute($data);
        if($insert) {
            $data['id'] = $db-> lastInsertId();
            $response = $data;
        } else {
            $response['error'] = 'Bir problem var çözülür yakında';
        }
    break;
    case 'delete-todo': 
        $id = $_POST['id'];
        if(!$id) {
            $response['error'] = 'id gelmedi';
        } else {
            $delete = $db->exec('delete from todos where id="'.$id.'"');
            if ($delete) {
               $response['deleted'] = true;
            } else {
                $response['error'] = "silinemedi olur böyle şeyler başka zaman bi denersin";
            }
        }

    break;
    case 'done-todo': 
        $id = $_POST['id'];
        $done = $_POST['done'];
        if(!$id) {
            $response['error'] = 'id gelmedi';
        } else {
            $query = $db->prepare('select id from todos where id = :id');
            $query->execute([
                'id' => $id
            ]);
            $todo = $query->fetch(PDO::FETCH_ASSOC);
            if(!$todo) {
              $response['error'] = "id eşleşmiyor birader";
            } else {
                $query = $db->prepare('update todos set done = :done where id = :id');
                $update = $query->execute([
                    'id' => $id,
                    'done' => $done
                ]);
                if($update) {
                    $response['done'] = true;
                }else {
                    $response['error'] = 'güncellenmedi şuan  canım sıkkın sonra gel';
                }
            }
             
           
        }

    break;


 }

 echo json_encode($response);


?>
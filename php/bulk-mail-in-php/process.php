<?php

        $email = htmlspecialchars(trim($_POST['email']));
        $message = $_POST['content'];
        $title = $_POST['title'];

        $username = "username";

	    include 'mail/class.phpmailer.php';

		$mail = new PHPMailer();
		$Birdenfazla = explode ("\r\n",$email);
                $eleman = count($Birdenfazla);
		for ($i=0; $i < $eleman; $i++) { 
        
		$mail->isSMTP();

		$mail->SMTPAuth = false;
		
		$mail->SMTPSecure = "tls";
		

	        $mail->Port = 587; 

		$mail->Host = 'host';

		$mail->Username = 'mail';

		$mail->Password = 'password';

		$mail->SetFrom($mail->Username, 'username');

 

		$mail->AddAddress($Birdenfazla[$i],$username);
		
	

		$mail->CharSet = 'UTF-8';

		$mail->Subject = $title ;

		$mail->MsgHTML($message);


		if($mail->Send()) {

			echo '<div class="alert alert-success">
  <strong>Başarılı!</strong> Mailiniz Başarıyla '.$Birdenfazla[$i].' mail adreslerine gönderildi. 
</div>
';

		} else {


		}

	}
?>

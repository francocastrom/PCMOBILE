<?php
// Check for empty fields
   if(empty($_POST['name_c']) || empty($_POST['phone_c']) || empty($_POST['email_c']) || empty($_POST['comment_c']) || !filter_var($_POST['email_c'],FILTER_VALIDATE_EMAIL))
   {
      echo "No arguments Provided!";
      return false;
   }   

   // //variables de los datos que obtengo desde el formulario html.
   $name = $_POST['name_c'];
   $phone = $_POST['phone_c'];
   $email = $_POST['email_c'];
   $message = $_POST['comment_c'];

   
   require 'phpmailer/PHPMailerAutoload.php';

   $mail = new PHPMailer;
   //$mail->SMTPDebug = 3;          // Enable verbose debug output
   
   $mail->From       = $email; //Remitente de Correo
   $mail->FromName   = $name; //Nombre del remitente
   //Set an alternative reply-to address
   //$mail->addReplyTo($email, $name );
   //Set who the message is to be sent to
   $mail->addAddress('contacto@pcmobile.cl');
   //$mail->addAddress('pmondaca@gmail.com');   
   //Set the subject line
   $mail->Subject = 'Contacto Web';
   //Read an HTML message body from an external file, convert referenced images to embedded,
   //convert HTML into a basic plain-text alternative body
   //$mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));
   //Replace the plain text body with one created manually

   $body="Nombre: ".$name."<br> Teléfono: ".$phone."<br> Email: ".$email."<br>Comentario: ".$message;
   $mail->Body = $body;
   $mail->AltBody = 'This is a plain-text message body';
   //Attach an image file
   //$mail->addAttachment('images/phpmailer_mini.png');




   if(!$mail->send()) {
       echo 'Error! Mensaje no enviado. ):';
       echo 'Mailer Error: ' . $mail->ErrorInfo;
   } else {
       echo 'Mensaje Enviado! (:';
   }
?>
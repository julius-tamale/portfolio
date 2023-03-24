<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate user inputs to prevent email injection attacks
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
    
    // Check if required fields are empty
    if (empty($name) || empty($email) || empty($message)) {
        echo "Please fill out all required fields.";
        exit;
    }

    // Check if email is valid
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Please enter a valid email address.";
        exit;
    }

    // Set email headers
    $to = "tjewlius@gmail.com";
    $headers = array();
    $headers[] = "MIME-Version: 1.0";
    $headers[] = "Content-type: text/plain; charset=UTF-8";
    $headers[] = "From: $name <$email>";
    $headers[] = "Reply-To: $name <$email>";

    // Send email using PHPMailer library
    require_once 'resources/PHPMailer-master/to/PHPMailerAutoload.php';
    $mail = new PHPMailer;
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'tls';
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 587;
    $mail->Username = 'tjewlius@gmail.com';
    $mail->Password = 'your_email_password';
    $mail->setFrom($email, $name);
    $mail->addAddress($to);
    $mail->Subject = $subject;
    $mail->Body = $message;

    if (!$mail->send()) {
        echo "There was an error sending your message. Please try again later.";
        exit;
    }

    echo "Thank you for your message. I'll be in touch shortly!";
}
?>
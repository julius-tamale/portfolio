<?php
if(isset($_POST['submit'])) {
    // Sanitize input data to prevent SQL injection and other security issues
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
    
    // Validate email address to ensure it's in the correct format
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = "Please enter a valid email address.";
    }
    
    // Send email if no errors were found
    if(empty($error)) {
        $recipient = 'juliotamex@proton.me';
        $mailheader = "From: $name <$email>\r\n";
        
        if(mail($recipient, $subject, $message, $mailheader)) {
            $success = "Thank you for your message, $name! We'll get back to you as soon as possible.";
        } else {
            $error = "There was an error sending your message. Please try again.";
        }
    }
}
?>
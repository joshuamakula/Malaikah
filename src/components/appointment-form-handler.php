<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $visitor_email = $_POST['email'];
    $subject = $_POST['subject'];
    $problem = $_POST['problem'];

    $email_from = "djoshjuan@gmail.com";

    $email_subject = "New form Appointment";

    $email_body = "Name: $name. \n". 
                    "Phone Number: $phone. \n". 
                        "User Email: $visitor_email . \n".
                            "Subject: $subject . \n".
                                "Problem: $problem. \n";
    
    $to = "makulajosh@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to, $email_subject, $email_body, $headers);

    header("Location: /");
?>
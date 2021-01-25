<?php

if($_POST) {
    $contact_name = "";
    $contact_email = "";
    $email_title = "DGM Contact";
    $contact_message = "";
    $recipient = "omicevic.edin1@gmail.com";
    $email_body =
    "<html>
    <head>
        <style>
        .title {
            color: white;
            margin: 0 auto;
            text-aling: center;
            margin-bottom: 1em;
        }
        </style>
    </head>
    <body>
    <div id='body'>
        <h2 class='title'>DGM Contact Message</h2>
        <div>
    ";

    if(isset($_POST['userName'])) {
        $contact_name = filter_var($_POST['userName'], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
                           <label><b>Name:</b></label>&nbsp;<span>".$contact_name."</span>
                        </div>";
    }

    if(isset($_POST['userEmail'])) {
        $contact_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['userEmail']);
        $contact_email = filter_var($contact_email, FILTER_VALIDATE_EMAIL);
        $email_body .= "<div>
                           <label><b>Email:</b></label>&nbsp;<span>".$contact_email."</span>
                        </div>";
    }

    if(isset($_POST['contactReason'])) {
        $contact_reason = filter_var($_POST['contactReason'], FILTER_SANITIZE_STRING);
        $email_body .= "<div>
                           <label><b>Reason:</b></label>&nbsp;<span>".$contact_reason."</span>
                        </div>";
    }

    if(isset($_POST['content'])) {
        $contact_message = htmlspecialchars($_POST['content']);
        $email_body .= "<div>
                           <label><b>Message:</b></label>
                           <div>".$contact_message."</div>
                        </div>";
    }

    $email_body .=
    "
            </div>
        </body>
    </html>
    ";

    // To send HTML mail, the Content-type header must be set
    $headers = "From: " . $contact_email . "\r\n".
               "MIME-Version: 1.0" . "\r\n" .
               "Content-type: text/html; charset=UTF-8" . "\r\n" .
               "X-Priority: 3\r\n" .
               "X-Mailer: PHP". phpversion() ."\r\n";

    if(mail($recipient, $email_title, $email_body, $headers)) {
        print "<p class='mailSuccess'>Mail Sent. Thx :)</p>";
    }

} else {
    print "<p class='mailError'>Problem in Sending Mail. :(</p>";
}
?>

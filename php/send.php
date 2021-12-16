<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

// Формирование самого письма
if ($email && $phone) {
    $title = "Запись в отель Best Tour Plan";
    $body = "
    <h2>Новое обращение</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br><br>
    <b>Почта:</b> $email<br><br>
    <b>Сообщение:</b><br>$message
    ";
} elseif ($email) {
    $title = "Подписка на новости Best Tour Plan";
    $body = "
    <h2>Подписка на новости</h2>
    <b>Почта:</b> $email
    ";
} else {
    $title = "Новое обращение Best Tour Plan";
    $body = "
    <h2>Новое обращение</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br><br>
    <b>Сообщение:</b><br>$message
    ";
}


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function ($str, $level) {
        $GLOBALS['status'][] = $str;
    };

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'sfomenko612@mail.ru'; // Логин на почте
    $mail->Password   = '8h650Ap1CrzyF3Ewby1j'; // Пароль на почте (пароль для внешнего приложения от mail.ru (8h650Ap1CrzyF3Ewby1j))
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('sfomenko612@mail.ru', 'Сергей Фоменко'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('anzelafranc@mail.ru');

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    // Проверяем отравленность сообщения
    if ($mail->send()) {
        $result = "success";
    } else {
        $result = "error";
    }
} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
if (!$phone) {
    header('Location: subscribe.html');
} else {
    header('Location: thankyou.html');
}

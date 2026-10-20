// script.js
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");
//
const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
alert("Halo, " + namaPengguna + "!");
document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
} else {
alert("Nama belum diisi.");
}
function operasiDasar(a, b) {
    document.getElementById("hasilOperasi").innerHTML = `
        <p>Penjumlahan: ${a + b}</p>
        <p>Pengurangan: ${a - b}</p>
        <p>Perkalian: ${a * b}</p>
        <p>Pembagian: ${b !== 0 ? a / b : "Tidak dapat dibagi nol"}</p>
        <p>Modulus: ${b !== 0 ? a % b : "Tidak dapat dibagi nol"}</p>
    `;
}
const inputA = prompt("Masukkan angka pertama:");
const inputB = prompt("Masukkan angka kedua:");

if (inputA === null || inputB === null ||
    inputA.trim() === "" || inputB.trim() === "") {
    alert("Input tidak boleh kosong!");
} else {
    const a = Number(inputA);
    const b = Number(inputB);

    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        alert("Masukkan angka yang valid!");
        } else {
        operasiDasar(a, b);
    }
}



const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);
if (inputNilai === null || inputNilai.trim() === "" ||
Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
alert("Lulus");
} else {
alert("Belum lulus");
}

const inputPilihan = prompt("Masukkan angka 1–5:");
switch (inputPilihan) {
case "1": alert("Bilangan satu"); break;
case "2": alert("Bilangan dua"); break;
case "3": alert("Bilangan tiga"); break;
case "4": alert("Bilangan empat"); break;
case "5": alert("Bilangan lima"); break;
default: alert("Pilihan tidak tersedia");
}

function ubahWarnaLatar(warna) {
document.body.style.backgroundColor = warna;
}

// G. Eksperimen Mandiri Nomor 7
// Tabel perkalian angka 7 dari 1 sampai // G. Eksperimen Mandiri Nomor 7

let hasil = "";

for (let i = 1; i <= 10; i++) {
    hasil += "7 x " + i + " = " + (7 * i) + "<br>";
}
document.getElementById("hasilPerkalian").innerHTML = hasil;


// G. Eksperimen Mandiri Nomor 8

function cekGenap(angka) {
    return angka % 2 === 0;
}

function periksaGenap() {
    const input = document.getElementById("angkaGenap").value;
    const hasil = document.getElementById("hasilGenap");

    if (input.trim() === "" || !Number.isInteger(Number(input))) {
        hasil.textContent = "Masukkan bilangan bulat yang valid!";
        return;
    }

    const angka = Number(input);

    hasil.textContent = cekGenap(angka);
}


// G. Eksperimen Mandiri Nomor 9
// Validasi form agar tidak boleh kosong

function validasiForm() {
    const nama = document.getElementById("namaForm").value;
    const nilai = document.getElementById("nilaiForm").value;
    const hasil = document.getElementById("hasilValidasi");

    if (nama.trim() === "" || nilai.trim() === "") {
        hasil.textContent = "Semua kolom wajib diisi!";
    } else {
        hasil.textContent = "Data berhasil dikirim!";
    }
}

// Latihan 8 dan Eksperimen Mandiri Nomor 10

const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;

    daftarMenu.forEach((item) => {
        if (item.checked) {
            total += Number(item.value);
        }
    });

    document.getElementById("total").textContent =
        total.toLocaleString("id-ID");
}

// G. Eksperimen Mandiri Nomor 11

function sembunyikanMenu() {
    document.getElementById("bagianMenu").style.display = "none";
}

function tampilkanMenu() {
    document.getElementById("bagianMenu").style.display = "block";
}
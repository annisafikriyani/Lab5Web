
 // MINI PROJECT - KALKULATOR NILAI MAHASISWA

// Function menghitung nilai akhir
function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

// Function menentukan predikat
function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

// Function menampilkan hasil
function tampilkanHasil(akhir, predikat, status) {
    document.getElementById("hasilNilai").innerHTML =
        "Nilai Akhir: " + akhir.toFixed(2) + "<br>" +
        "Predikat: " + predikat + "<br>" +
        "Status: " + status;
}

// Function memproses nilai dari form
function prosesNilai() {
    const inputTugas = document.getElementById("tugas").value;
    const inputUts = document.getElementById("uts").value;
    const inputUas = document.getElementById("uas").value;

    const hasil = document.getElementById("hasilNilai");

    // Validasi input kosong
    if (inputTugas.trim() === "" ||
        inputUts.trim() === "" ||
        inputUas.trim() === "") {
        hasil.textContent = "Semua nilai wajib diisi!";
        return;
    }

    // Konversi menjadi number
    const tugas = Number(inputTugas);
    const uts = Number(inputUts);
    const uas = Number(inputUas);

    // Validasi nilai 0 sampai 100
    if (!Number.isFinite(tugas) ||
        !Number.isFinite(uts) ||
        !Number.isFinite(uas) ||
        tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100) {
        hasil.textContent = "Nilai harus antara 0 sampai 100!";
        return;
    }

    // Menghitung nilai akhir
    const akhir = hitungNilaiAkhir(tugas, uts, uas);

    // Menentukan predikat
    const predikat = tentukanPredikat(akhir);

    // Menentukan status kelulusan
    const status = akhir >= 60 ? "Lulus" : "Belum lulus";

    // Menampilkan hasil di halaman HTML
    tampilkanHasil(akhir, predikat, status);

    // Menampilkan hasil di Console

console.log("Nilai akhir:", akhir.toFixed(2));
console.log("Predikat:", predikat);
console.log("Status:", akhir >= 60 ? "Lulus" : "Belum lulus");
}
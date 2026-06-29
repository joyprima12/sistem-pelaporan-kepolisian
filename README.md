# Sistem Pelaporan Kepolisian Online

Aplikasi web sederhana untuk membuat dan mengelola laporan masyarakat secara online. Data disimpan menggunakan **LocalStorage** pada browser sehingga tidak memerlukan backend atau database.

---

## 🚀 Fitur

### Halaman Form Laporan (index.html)
- Mengisi data pelapor
- Memilih jenis laporan
- Menambahkan lokasi kejadian
- Menambahkan keterangan laporan
- Menyimpan laporan ke LocalStorage

### Halaman Data Laporan (data.html)
- Menampilkan semua laporan yang masuk
- Mengubah status laporan (Diproses ↔ Selesai)
- Menghapus data laporan

---

## 📁 Struktur File
├── index.html # Form input laporan
├── data.html # Tabel data laporan
├── style.css # Styling tampilan
├── script.js # Logika aplikasi (CRUD LocalStorage)
└── README.md # Dokumentasi proyek

---

## ⚙️ Cara Menjalankan

1. Download atau clone repository ini
2. Pastikan semua file berada dalam satu folder
3. Buka file `index.html` di browser
4. Gunakan menu navigasi untuk berpindah ke halaman data

---

## 💾 Cara Kerja Data

- Data laporan disimpan di `localStorage` browser dengan key: `laporan`
- Setiap laporan memiliki struktur seperti berikut:

```json
{
  "id": 1710000000000,
  "nama": "Nama Pelapor",
  "telepon": "08123456789",
  "jenis": "Pencurian",
  "lokasi": "Alamat kejadian",
  "keterangan": "Deskripsi kejadian",
  "status": "Diproses"
}

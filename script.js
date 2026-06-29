// simpan data ke localStorage
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formLaporan");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let data = {
                nama: document.getElementById("nama").value,
                nim: document.getElementById("nim").value,
                layanan: document.getElementById("layanan").value,
                keterangan: document.getElementById("keterangan").value
            };

            let daftar = JSON.parse(localStorage.getItem("laporan")) || [];
            daftar.push(data);
            localStorage.setItem("laporan", JSON.stringify(daftar));

            alert("Data berhasil disimpan!");

            form.reset();
        });
    }

    // tampilkan data di tabel
    let tabel = document.getElementById("tabelData");

    if (tabel) {
        let data = JSON.parse(localStorage.getItem("laporan")) || [];

        data.forEach(item => {
            let row = `
                <tr>
                    <td>${item.nama}</td>
                    <td>${item.nim}</td>
                    <td>${item.layanan}</td>
                    <td>${item.keterangan}</td>
                </tr>
            `;
            tabel.innerHTML += row;
        });
    }

});
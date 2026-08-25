# denji-web

Halaman link-in-bio yang sudah dipecah menjadi project **Node.js (Vite)** — siap
dijalankan lokal dengan hot-reload dan siap di-deploy ke **Vercel**.

## Struktur

```
denji-web/
├── buttons/              ← ✏️ SATU FILE = SATU TOMBOL (paling sering diedit)
│   ├── _contoh.js.txt    ← template untuk membuat tombol baru (tidak ikut tampil)
│   ├── 1-nomor-wa.js
│   └── 2-join-grub-wa.js
├── config.js             ← ✏️ pengaturan: gambar, judul, bio, warna, shop, sosial, animasi
├── index.html            ← kerangka + tag pratinjau link (Open Graph)
├── main.js               ← mesin tampilan (tidak perlu diubah)
├── style.css             ← tampilan & animasi (tidak perlu diubah)
├── vite.config.js
└── package.json
```

## Menjalankan di kombar (development, real-time)

```bash
npm install      # sekali saja di awal
npm run dev      # buka http://localhost:5173
```

Selama `npm run dev` jalan, **setiap file yang kamu simpan langsung memuat
ulang halaman** — ganti tulisan tombol, warna, gambar, semuanya langsung
kelihatan tanpa refresh manual.

> Di HP: `npm run dev -- --host` lalu buka alamat yang muncul di terminal
> (pastikan HP dan komputer satu WiFi).

## Mengelola tombol (folder `buttons/`)

| Aksi | Cara |
|---|---|
| **Tambah tombol** | duplikat `buttons/_contoh.js.txt` → simpan sebagai `buttons/3-nama-baru.js` → edit isinya |
| **Hapus tombol** | hapus file tombolnya |
| **Urutkan** | ganti angka di depan nama file (`1-`, `2-`, `3-`, …) |
| **Edit** | buka filenya, ubah `judul` / `url` / dll, simpan |

Isi satu tombol:

```js
export default {
  judul  : "Judul tombol",              // wajib
  url    : "https://link-tujuan.com",   // wajib
  gambar : "",        // opsional: nama gambar dari config.js, link, atau file
  subjudul : "",      // opsional
  ikon : "",          // opsional: instagram, tiktok, youtube, whatsapp, dll
};
```

> Kalau tombol lebih dari 9, pakai `01-`, `02-`, … `10-` supaya urutannya benar.
> Semua file `.js` di folder itu otomatis dimuat — file lain (mis. `.txt`) diabaikan.

## Mengedit pengaturan (`config.js`)

Sama seperti versi lama, tinggal ubah isinya:

- **BAGIAN 1 GAMBAR** — semua alamat foto
- **BAGIAN 2 PENGATURAN UMUM** — judul, bio, warna, tampil/sembunyi
- **BAGIAN 3 SHOP** — nyalakan/matikan tab shop + daftar produk
- **BAGIAN 5 IKON SOSIAL** — ikon di paling bawah
- **BAGIAN 6 ANIMASI** — nyalakan/matikan efek gerak

Jika judul/bio/gambar utama diubah dan kamu peduli pratinjau link di
WhatsApp/X, ubah juga 3 tag berlabel `EDIT` di dalam `index.html`
(WhatsApp tidak menjalankan JavaScript, jadi hanya tag statis yang dibaca).

## Deploy ke Vercel

Cara GitHub (disarankan — update jadi otomatis):

1. Buat repo baru di GitHub, push folder project ini:
   ```bash
   git init
   git add .
   git commit -m "denji web"
   git remote add origin https://github.com/username/denji-web.git
   git push -u origin main
   ```
2. Buka **vercel.com/new** → pilih repo tadi → klik **Deploy**
   (Vercel otomatis mendeteksi Vite — tidak perlu atur apa-apa).
3. Selesai. Setiap `git push` berikutnya = deploy baru, perubahan
   langsung live di internet.

Cara cepat tanpa GitHub (butuh akun Vercel):

```bash
npm i -g vercel
vercel          # deploy pertama, ikuti pertanyaannya
```

Build manual untuk cek: `npm run build` (hasil di folder `dist/`).

/* ============================================================================
   FILE PENGATURAN UTAMA — semua yang sering diedit ada di sini.
   --------------------------------------------------------------------------
   BAGIAN 1  GAMBAR           — semua foto
   BAGIAN 2  PENGATURAN UMUM  — judul, bio, warna, tampil/sembunyi
   BAGIAN 3  SHOP             — nyalakan/matikan + isi produk
   BAGIAN 4  DAFTAR LINK      — sekarang di folder /buttons (satu file = satu tombol)
   BAGIAN 5  IKON SOSIAL      — ikon di paling bawah
   BAGIAN 6  ANIMASI          — efek gerak

   3 ATURAN AGAR TIDAK ERROR
   1. Setiap baris diakhiri koma        ,
   2. Tanda kutip harus berpasangan     "..."
   3. Jangan hapus tanda                { }  [ ]
   ============================================================================ */


export const GAMBAR = {
  fotoAtas : "https://i.8upload.com/image/f891922531d80797/proyek-baru-30-68370c5.png",
  logo     : "https://i.8upload.com/image/d4836d32cf164939/proyek-baru-29-2948c6c.png",

  link1    : "https://iili.io/Ce4o8vf.webp",
  link2    : "https://iili.io/Ce4ogTl.webp",
  link3    : "https://iili.io/Ce4otvj.webp",
  anacry  : "https://i.8upload.com/image/201d47b3f9c22ecb/aaa8eb83229997f26c302807c9d54fa7.png",
  link4    : "https://iili.io/Ce4x33g.webp",
  tiktok   : "https://iili.io/Ce4xFaa.webp",

  produk1  : "https://iili.io/Ce4xBuR.webp",
  produk2  : "https://iili.io/Ce4xxnI.webp",
  produk3  : "https://iili.io/Ce4xuFn.webp",
  produk4  : "https://iili.io/Ce4xR8G.webp",
};


/* ============================================================================
   BAGIAN 2 — PENGATURAN UMUM
   ============================================================================ */
export const PENGATURAN = {

  judulHalaman : "Denji Web",       // judul di tab browser
  namaTeks     : "denji",       // dipakai kalau logo dikosongkan
  bio          : "hobi ngedit, kicaw kicaw kicaw mania",

  tampilkanFotoAtas : true,        // false = tanpa foto besar di atas
  tampilkanLogo     : true,        // false = pakai tulisan biasa
  tampilkanVerified : true,        // false = sembunyikan lencana centang
  tulisanVerified   : "Verified",

  // Warna — ganti kode #rrggbb saja
  warna : {
    latar       : "#c8d97c",       // latar halaman
    tombol      : "#f1fcbd",       // isi tombol
    garisTombol : "#323c1f",       // garis tepi + bayangan
    teksTombol  : "#1e2330",       // tulisan di tombol
    teksHalaman : "#2c351e",       // bio + ikon sosial
  },
};


/* ============================================================================
   BAGIAN 3 — SHOP
   --------------------------------------------------------------------------
   aktif : true  → tab "Shop" muncul
           false → tab hilang, halaman jadi satu kolom link saja
   ============================================================================ */
export const SHOP = {

  aktif : false,

  namaTabLinks : "Links",          // tulisan tab kiri
  namaTabShop  : "Shop",           // tulisan tab kanan

  // Judul kecil di atas daftar produk. Kosongkan ("") kalau tidak perlu.
  judul     : "",
  keterangan: "",

  kolom     : 2,                   // jumlah kolom produk: 1, 2, atau 3
  tampilkanHarga : true,           // false = harga disembunyikan

  // Tombol besar di bawah daftar produk. Kosongkan url ("") untuk menghilangkan.
  tombolBawah : {
    teks : "",
    url  : "",
  },

  // ---- DAFTAR PRODUK ----
  // Tambah  : salin satu blok { ... }, tempel, ganti isinya
  // Hapus   : hapus satu blok { ... } beserta komanya
  // Urutkan : pindahkan posisi bloknya
  produk : [

    {
      nama   : 'The "Creamy & Crunchy" Duo',
      harga  : "$30",
      gambar : "produk1",
      url    : "https://pistakio.co/products/the-pistakio-duo",
      label  : "",                 // contoh: "Terlaris" — muncul jadi stiker
    },

    {
      nama   : "Mini Gift Set",
      harga  : "$20",
      gambar : "produk2",
      url    : "https://pistakio.co/products/mini-gift-set",
      label  : "",
    },

    {
      nama   : "Crunchy Pistachio Spread",
      harga  : "$15",
      gambar : "produk3",
      url    : "https://pistakio.co/products/crunchy-pistachio-spread",
      label  : "",
    },

    {
      nama   : "Creamy Pistachio Spread",
      harga  : "$15",
      gambar : "produk4",
      url    : "https://pistakio.co/products/creamy-pistachio-spread",
      label  : "",
    },

  ],
};


/* ============================================================================
   BAGIAN 4 — DAFTAR LINK (TOMBOL)
   --------------------------------------------------------------------------
   Sekarang setiap tombol adalah SATU FILE di folder /buttons.
     Tambah tombol : salin buttons/_contoh.js.txt  ->  buttons/3-tombol-baru.js
     Hapus tombol  : hapus filenya
     Ubah urutan   : ubah angka di depan nama file (1-, 2-, 3-, ...)
   ============================================================================ */


/* ============================================================================
   BAGIAN 5 — IKON SOSIAL
   Pilihan jenis: instagram, tiktok, pinterest, linkedin, email,
                  youtube, facebook, x, whatsapp, website
   ============================================================================ */
export const SOSIAL = [
  { jenis: "instagram", url: "https://instagram.com" },
  { jenis: "tiktok",    url: "https://www.tiktok.com/@inidenjiww?_r=1&_t=ZS-98NmL8bGBee" },
  { jenis: "pinterest", url: "https://www.pinterest.com" },
  { jenis: "linkedin",  url: "https://linkedin.com" },
  { jenis: "email",     url: "mailto:nothing@mail.lol" },
];


/* ============================================================================
   BAGIAN 6 — ANIMASI
   --------------------------------------------------------------------------
   Semua efek gerak diatur di sini. Isi dengan  true  (nyala)  atau  false (mati).
   Mau halaman diam total? Cukup ubah   aktif : false

   Semua animasi di sini ringan: hanya memakai transform & opacity (dikerjakan
   kartu grafis, bukan prosesor), animasi berulang otomatis berhenti setelah
   selesai, dan di HP kentang efek berat dimatikan sendiri.
   ============================================================================ */
export const ANIMASI = {

  aktif : true,                 // false = semua animasi mati sekaligus

  modeHemat : "auto",           // "auto" = deteksi HP lemah/hemat data lalu
                                //          sisakan animasi paling ringan saja
                                // "selalu" = paksa mode ringan
                                // "jangan" = jangan pernah aktifkan mode ringan

  // ---- saat halaman pertama dibuka ----
  masukHalaman   : true,        // foto, logo, bio, tombol muncul lembut
  jedaAntarTombol: 80,          // ms — makin besar makin "satu per satu"

  // ---- saat digulir (scroll) ----
  munculSaatScroll : true,      // kartu muncul waktu masuk layar
  garisProgres     : true,      // garis tipis penunjuk posisi scroll di atas

  // ---- foto & logo ----
  fotoBernapas  : true,         // foto atas zoom pelan (ken burns)
  logoMengambang: true,         // logo naik-turun pelan

  // ---- tombol / kartu ----
  hoverTombol : true,           // tombol terangkat saat disentuh kursor
  kilauTombol : true,           // kilatan cahaya menyapu tombol saat hover
  efekSentuh  : true,           // riak (ripple) saat tombol diklik

  // ---- pernak-pernik ----
  ikonSosialMemantul : true,    // ikon sosial memantul bergantian
  lencanaBerkilau    : true,    // lencana Verified berdenyut halus

  // ---- kecepatan keseluruhan ----
  kecepatan : 1,                // 1 = normal, 0.7 = lebih cepat, 1.5 = lebih santai
};

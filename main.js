/* ============================================================================
   MESIN TAMPILAN — tidak perlu diubah.
   --------------------------------------------------------------------------
   Semua pengaturan ada di config.js; tombol-tombol ada di folder /buttons.

   Cara kerja:
   - `npm run dev`   : server development — setiap file yang diubah/disimpan
                       langsung memuat ulang halaman (real-time).
   - `npm run build` : semua digabung jadi situs statis di folder dist/
                       (ini yang dipakai Vercel saat deploy).
   ============================================================================ */

import './style.css';
import { GAMBAR, PENGATURAN, SHOP, SOSIAL, ANIMASI } from './config.js';

/* ---- tombol-tombol diambil OTOMATIS dari folder /buttons ----
   Satu file .js di folder itu = satu tombol di halaman.
   Urutan tampil = urutan nama file (makanya diberi awalan 1-, 2-, 3-...). */
const buttonFiles = import.meta.glob('/buttons/*.js', { eager: true });
const LINK = Object.keys(buttonFiles)
  .sort()
  .map(function (k) { return buttonFiles[k].default; })
  .filter(Boolean);

(function(){
'use strict';

var ICON = {
  instagram:'<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>',
  tiktok:'<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.06-2.77V9.4a6.34 6.34 0 1 0 5.51 6.3V9.05a8.27 8.27 0 0 0 4.76 1.5V7.1a4.83 4.83 0 0 1-.99-.41Z"/>',
  pinterest:'<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>',
  linkedin:'<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>',
  email:'<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>',
  youtube:'<path d="M23.5 6.2a3 3 0 0 0-2.12-2.12C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.53A3 3 0 0 0 .5 6.2C0 8.07 0 12 0 12s0 3.93.5 5.8a3 3 0 0 0 2.12 2.12c1.88.53 9.38.53 9.38.53s7.5 0 9.38-.53a3 3 0 0 0 2.12-2.12C24 15.93 24 12 24 12s0-3.93-.5-5.8ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z"/>',
  facebook:'<path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z"/>',
  x:'<path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.64 7.58H.48l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41Z"/>',
  whatsapp:'<path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35ZM12.04 21.8h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.79 9.79 0 1 1 8.31 4.6ZM20.5 3.49A11.78 11.78 0 0 0 2.05 17.72L.37 23.86l6.28-1.65a11.78 11.78 0 0 0 17.3-10.4c0-3.15-1.23-6.11-3.45-8.32Z"/>',
  website:'<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.93 8ZM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96ZM4.26 14a7.96 7.96 0 0 1 0-4h3.38a16.6 16.6 0 0 0 0 4H4.26Zm.81 2h2.95c.3 1.26.77 2.46 1.38 3.56A7.99 7.99 0 0 1 5.07 16Zm2.95-8H5.07a7.99 7.99 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.02 8ZM12 19.96A13.6 13.6 0 0 1 10.09 16h3.82A13.6 13.6 0 0 1 12 19.96ZM14.34 14H9.66a14.9 14.9 0 0 1 0-4h4.68a14.9 14.9 0 0 1 0 4Zm.26 5.56c.61-1.1 1.08-2.3 1.38-3.56h2.95a7.99 7.99 0 0 1-4.33 3.56ZM16.36 14a16.6 16.6 0 0 0 0-4h3.38a7.96 7.96 0 0 1 0 4h-3.38Z"/>'
};
var DOTS = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="12" cy="19" r="1.6"/></svg>';

function esc(s){
  return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
function safeUrl(u){
  var s = String(u==null?'':u).trim();
  if (!s) return '';
  if (/^(https?:|mailto:|tel:|data:image\/|#|\/|\.\/|\.\.\/)/i.test(s)) return s;
  if (/^javascript:/i.test(s)) return '';
  return 'https://' + s;
}
function icon(n){
  var k = String(n||'').toLowerCase().trim();
  return ICON[k] ? '<svg viewBox="0 0 24 24" aria-hidden="true">'+ICON[k]+'</svg>' : '';
}

var P  = PENGATURAN || {};
var W  = P.warna || {};
var SH = (typeof SHOP !== 'undefined' && SHOP) ? SHOP : { aktif:false, produk:[] };
var L  = Array.isArray(LINK) ? LINK : [];
var SO = (typeof SOSIAL !== 'undefined' && Array.isArray(SOSIAL)) ? SOSIAL : [];
var G  = (typeof GAMBAR !== 'undefined' && GAMBAR) ? GAMBAR : {};

/* "link1" -> isi GAMBAR.link1 ; kalau bukan nama yang terdaftar, dipakai apa adanya */
function img(v){
  if (!v) return '';
  return Object.prototype.hasOwnProperty.call(G, v) ? G[v] : v;
}

/* ---- warna ---- */
var rs = document.documentElement.style;
if (W.latar){ rs.setProperty('--profileBackground', W.latar);
  var mt = document.querySelector('meta[name=theme-color]'); if (mt) mt.setAttribute('content', W.latar); }
if (W.tombol)      rs.setProperty('--button-style-background', W.tombol);
if (W.garisTombol){ rs.setProperty('--button-style-border-color', W.garisTombol);
                    rs.setProperty('--button-style-shadow-color', W.garisTombol); }
if (W.teksTombol)  rs.setProperty('--button-style-text', W.teksTombol);
if (W.teksHalaman){ rs.setProperty('--bodyText', W.teksHalaman);
                    rs.setProperty('--socialLinkFill', W.teksHalaman); }

/* ---- warna turunan dihitung di sini supaya tampil sama di semua
       perangkat/browser (termasuk yang belum mendukung color-mix()) ---- */
function mixHex(a, b, t){
  var A = [parseInt(a.slice(1,3),16), parseInt(a.slice(3,5),16), parseInt(a.slice(5,7),16)];
  var B = [parseInt(b.slice(1,3),16), parseInt(b.slice(3,5),16), parseInt(b.slice(5,7),16)];
  var o = [];
  for (var i=0;i<3;i++){ o.push(Math.round(A[i]*(1-t)+B[i]*t)); }
  return '#' + o.map(function(v){ var s=v.toString(16); return s.length<2?'0'+s:s; }).join('');
}
rs.setProperty('--button-style-background-hover', mixHex(W.tombol  || '#f1fcbd', '#000000', .07));
rs.setProperty('--frame-color',                  mixHex(W.latar   || '#c8d97c', '#000000', .12));

var cols = Math.min(3, Math.max(1, parseInt(SH.kolom, 10) || 2));
rs.setProperty('--shop-cols', cols);

/* ---- judul ---- */
var judul = P.judulHalaman || P.namaTeks || 'Halaman saya';
document.title = P.bio ? (judul + ' — ' + P.bio) : judul;
var md = document.querySelector('meta[name=description]');
if (md) md.setAttribute('content', P.bio || '');

var pakaiHero = P.tampilkanFotoAtas !== false && !!G.fotoAtas;
var pakaiLogo = P.tampilkanLogo !== false && !!G.logo;
var adaShop   = SH.aktif === true && Array.isArray(SH.produk) && SH.produk.length > 0;

/* ---- header ---- */
var head = pakaiLogo
  ? '<img class="logo" src="'+esc(G.logo)+'" alt="'+esc(judul)+'" decoding="async" referrerpolicy="no-referrer">'
  : '<div class="name-text">'+esc(P.namaTeks || judul)+'</div>';

var verified = P.tampilkanVerified === false ? '' :
  '<div class="verified">'+
    '<svg class="vbadge" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true">'+
      '<linearGradient id="vb-a"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="vb-b" gradientUnits="userSpaceOnUse" x1="11.9996" x2="11.9996" xlink:href="#vb-a" y1=".57305" y2="23.2103"/><radialGradient id="vb-c" cx="0" cy="0" gradientTransform="matrix(22.7453 22.6373 -6.02829 16.9286 .626953 .573048)" gradientUnits="userSpaceOnUse" r="1" xlink:href="#vb-a"/><linearGradient id="vb-d" gradientUnits="userSpaceOnUse" x1="11.9996" x2="11.9996" y1=".573048" y2="23.2103"><stop offset="0" stop-opacity="0"/><stop offset="1" stop-opacity=".16"/></linearGradient><clipPath id="vb-e"><path d="m0 0h24v24h-24z"/></clipPath><clipPath id="vb-f"><path d="m0 0h24v24h-24z"/></clipPath><g clip-path="url(#vb-e)"><g clip-path="url(#vb-f)"><path d="m11.1709 1.20488c.4636-.44224 1.1936-.442242 1.6572 0l.416.39746c.4922.46936 1.2072.62118 1.8477.39258l.542-.19336c.5657-.20194 1.1866.04554 1.4629.56543l.0508.1084.2187.53125v.00098c.2589.62876.8502 1.05776 1.5283 1.10937l.5733.04395c.6389.04862 1.1269.59102 1.1084 1.23144l-.0166.5752c-.0195.67976.3459 1.31273.9443 1.63574l.5068.27344c.5638.30433.789.99767.5118 1.57519l-.2491.51856c-.2942.61319-.2181 1.34029.1973 1.87889l.3516.4551c.3913.5072.3152 1.2325-.1729 1.6475l-.4385.373c-.5182.4403-.7443 1.1349-.5839 1.7959l.1357.5596c.1512.6225-.2133 1.254-.8281 1.4345l-.5518.1621c-.6526.1915-1.1423.7344-1.2646 1.4034l-.1036.5664c-.1152.6302-.7048 1.0588-1.3398.9736l-.5703-.0762c-.6742-.0905-1.3417.2062-1.7256.7676l-.3242.4756c-.3615.5289-1.0756.6799-1.6211.3438l-.4893-.3018c-.579-.357-1.3105-.357-1.8896 0l-.4893.3018c-.5453.336-1.2585.1849-1.62009-.3438l-.32519-.4756c-.38385-.5613-1.05152-.8581-1.72559-.7676l-.57031.0762c-.63498.0851-1.2247-.3435-1.33984-.9736l-.10352-.5664c-.12229-.6689-.61123-1.2118-1.26367-1.4034l-.55274-.1621c-.61468-.1806-.97927-.8121-.82812-1.4345l.13574-.5596c.16034-.661-.06569-1.3555-.58398-1.7959l-.43848-.373c-.487957-.415-.564118-1.1403-.17285-1.6475l.35156-.4551c.41548-.5386.4917-1.2657.19727-1.87889l-.24903-.51856c-.27726-.57745-.05185-1.27081.51172-1.57519l.50684-.27344c.59852-.32298.96379-.95592.94433-1.63574l-.0166-.5752c-.01842-.64043.46957-1.18277 1.1084-1.23144l.57422-.04395c.6781-.05175 1.26871-.48136 1.52734-1.11035l.21973-.53125c.24365-.59257.90929-.88923 1.51269-.67383l.542.19336c.6405.22869 1.35547.07673 1.84767-.39258z" fill="#d29016"/><path d="m11.1709 1.20488c.4636-.44224 1.1936-.442242 1.6572 0l.416.39746c.4922.46936 1.2072.62118 1.8477.39258l.542-.19336c.5657-.20194 1.1866.04554 1.4629.56543l.0508.1084.2187.53125v.00098c.2589.62876.8502 1.05776 1.5283 1.10937l.5733.04395c.6389.04862 1.1269.59102 1.1084 1.23144l-.0166.5752c-.0195.67976.3459 1.31273.9443 1.63574l.5068.27344c.5638.30433.789.99767.5118 1.57519l-.2491.51856c-.2942.61319-.2181 1.34029.1973 1.87889l.3516.4551c.3913.5072.3152 1.2325-.1729 1.6475l-.4385.373c-.5182.4403-.7443 1.1349-.5839 1.7959l.1357.5596c.1512.6225-.2133 1.254-.8281 1.4345l-.5518.1621c-.6526.1915-1.1423.7344-1.2646 1.4034l-.1036.5664c-.1152.6302-.7048 1.0588-1.3398.9736l-.5703-.0762c-.6742-.0905-1.3417.2062-1.7256.7676l-.3242.4756c-.3615.5289-1.0756.6799-1.6211.3438l-.4893-.3018c-.579-.357-1.3105-.357-1.8896 0l-.4893.3018c-.5453.336-1.2585.1849-1.62009-.3438l-.32519-.4756c-.38385-.5613-1.05152-.8581-1.72559-.7676l-.57031.0762c-.63498.0851-1.2247-.3435-1.33984-.9736l-.10352-.5664c-.12229-.6689-.61123-1.2118-1.26367-1.4034l-.55274-.1621c-.61468-.1806-.97927-.8121-.82812-1.4345l.13574-.5596c.16034-.661-.06569-1.3555-.58398-1.7959l-.43848-.373c-.487957-.415-.564118-1.1403-.17285-1.6475l.35156-.4551c.41548-.5386.4917-1.2657.19727-1.87889l-.24903-.51856c-.27726-.57745-.05185-1.27081.51172-1.57519l.50684-.27344c.59852-.32298.96379-.95592.94433-1.63574l-.0166-.5752c-.01842-.64043.46957-1.18277 1.1084-1.23144l.57422-.04395c.6781-.05175 1.26871-.48136 1.52734-1.11035l.21973-.53125c.24365-.59257.90929-.88923 1.51269-.67383l.542.19336c.6405.22869 1.35547.07673 1.84767-.39258z" fill="url(#vb-b)" fill-opacity=".2"/><path d="m11.1709 1.20488c.4636-.44224 1.1936-.442242 1.6572 0l.416.39746c.4922.46936 1.2072.62118 1.8477.39258l.542-.19336c.5657-.20194 1.1866.04554 1.4629.56543l.0508.1084.2187.53125v.00098c.2589.62876.8502 1.05776 1.5283 1.10937l.5733.04395c.6389.04862 1.1269.59102 1.1084 1.23144l-.0166.5752c-.0195.67976.3459 1.31273.9443 1.63574l.5068.27344c.5638.30433.789.99767.5118 1.57519l-.2491.51856c-.2942.61319-.2181 1.34029.1973 1.87889l.3516.4551c.3913.5072.3152 1.2325-.1729 1.6475l-.4385.373c-.5182.4403-.7443 1.1349-.5839 1.7959l.1357.5596c.1512.6225-.2133 1.254-.8281 1.4345l-.5518.1621c-.6526.1915-1.1423.7344-1.2646 1.4034l-.1036.5664c-.1152.6302-.7048 1.0588-1.3398.9736l-.5703-.0762c-.6742-.0905-1.3417.2062-1.7256.7676l-.3242.4756c-.3615.5289-1.0756.6799-1.6211.3438l-.4893-.3018c-.579-.357-1.3105-.357-1.8896 0l-.4893.3018c-.5453.336-1.2585.1849-1.62009-.3438l-.32519-.4756c-.38385-.5613-1.05152-.8581-1.72559-.7676l-.57031.0762c-.63498.0851-1.2247-.3435-1.33984-.9736l-.10352-.5664c-.12229-.6689-.61123-1.2118-1.26367-1.4034l-.55274-.1621c-.61468-.1806-.97927-.8121-.82812-1.4345l.13574-.5596c.16034-.661-.06569-1.3555-.58398-1.7959l-.43848-.373c-.487957-.415-.564118-1.1403-.17285-1.6475l.35156-.4551c.41548-.5386.4917-1.2657.19727-1.87889l-.24903-.51856c-.27726-.57745-.05185-1.27081.51172-1.57519l.50684-.27344c.59852-.32298.96379-.95592.94433-1.63574l-.0166-.5752c-.01842-.64043.46957-1.18277 1.1084-1.23144l.57422-.04395c.6781-.05175 1.26871-.48136 1.52734-1.11035l.21973-.53125c.24365-.59257.90929-.88923 1.51269-.67383l.542.19336c.6405.22869 1.35547.07673 1.84767-.39258z" fill="url(#vb-c)" fill-opacity=".55"/><path d="m11.1709 1.20488c.4636-.44224 1.1936-.442242 1.6572 0l.416.39746c.4922.46936 1.2072.62118 1.8477.39258l.542-.19336c.5657-.20194 1.1866.04554 1.4629.56543l.0508.1084.2187.53125v.00098c.2589.62876.8502 1.05776 1.5283 1.10937l.5733.04395c.6389.04862 1.1269.59102 1.1084 1.23144l-.0166.5752c-.0195.67976.3459 1.31273.9443 1.63574l.5068.27344c.5638.30433.789.99767.5118 1.57519l-.2491.51856c-.2942.61319-.2181 1.34029.1973 1.87889l.3516.4551c.3913.5072.3152 1.2325-.1729 1.6475l-.4385.373c-.5182.4403-.7443 1.1349-.5839 1.7959l.1357.5596c.1512.6225-.2133 1.254-.8281 1.4345l-.5518.1621c-.6526.1915-1.1423.7344-1.2646 1.4034l-.1036.5664c-.1152.6302-.7048 1.0588-1.3398.9736l-.5703-.0762c-.6742-.0905-1.3417.2062-1.7256.7676l-.3242.4756c-.3615.5289-1.0756.6799-1.6211.3438l-.4893-.3018c-.579-.357-1.3105-.357-1.8896 0l-.4893.3018c-.5453.336-1.2585.1849-1.62009-.3438l-.32519-.4756c-.38385-.5613-1.05152-.8581-1.72559-.7676l-.57031.0762c-.63498.0851-1.2247-.3435-1.33984-.9736l-.10352-.5664c-.12229-.6689-.61123-1.2118-1.26367-1.4034l-.55274-.1621c-.61468-.1806-.97927-.8121-.82812-1.4345l.13574-.5596c.16034-.661-.06569-1.3555-.58398-1.7959l-.43848-.373c-.487957-.415-.564118-1.1403-.17285-1.6475l.35156-.4551c.41548-.5386.4917-1.2657.19727-1.87889l-.24903-.51856c-.27726-.57745-.05185-1.27081.51172-1.57519l.50684-.27344c.59852-.32298.96379-.95592.94433-1.63574l-.0166-.5752c-.01842-.64043.46957-1.18277 1.1084-1.23144l.57422-.04395c.6781-.05175 1.26871-.48136 1.52734-1.11035l.21973-.53125c.24365-.59257.90929-.88923 1.51269-.67383l.542.19336c.6405.22869 1.35547.07673 1.84767-.39258z" stroke="url(#vb-d)" stroke-width=".6"/><path d="m7.60547 11.3441 3.18193 3.182 6.3639-6.36399" stroke="#fff" stroke-width="3"/></g></g>'+
    '</svg>'+
    '<span>'+esc(P.tulisanVerified || 'Verified')+'</span>'+
  '</div>';

var tabs = !adaShop ? '' :
  '<div class="tabs" id="tabs" data-active="links">'+
    '<div class="tabs-inner" role="tablist" aria-label="Bagian">'+
      '<button class="tab" type="button" role="tab" id="tab-links" aria-controls="panel-links" aria-selected="true"><span>'+esc(SH.namaTabLinks || 'Links')+'</span></button>'+
      '<button class="tab" type="button" role="tab" id="tab-shop" aria-controls="panel-shop" aria-selected="false" tabindex="-1"><span>'+esc(SH.namaTabShop || 'Shop')+'</span></button>'+
    '</div></div>';

function linkCard(it){
  if (!it || (!it.judul && !it.url)) return '';
  var url = safeUrl(it.url), label = esc(it.judul || '');
  var thumb = it.gambar ? '<span class="thumb"><img src="'+esc(img(it.gambar))+'" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer"></span>' : '';
  var sub   = it.subjudul ? '<span class="link-sub">'+icon(it.ikon)+esc(it.subjudul)+'</span>' : '';
  var cta   = it.tombol ? '<a class="cta" href="'+esc(url)+'" target="_blank" rel="noopener">'+esc(it.tombol)+'</a>' : '';
  var hd    = it.embed ? '<a class="link-hit" href="'+esc(url)+'" target="_blank" rel="noopener" aria-label="'+label+'"><div class="link-head"></div></a>' : '';
  var cls   = 'chin' + (it.gambar ? ' has-thumb' : '');
  var inner = thumb + '<span class="link-label">'+label+'</span>' + sub + cta;
  var chin  = cta
    ? '<div class="'+cls+'"><a class="link-hit" href="'+esc(url)+'" target="_blank" rel="noopener" style="position:absolute;top:0;right:0;bottom:0;left:0;z-index:1"><span class="sr-only">'+label+'</span></a>'+inner+'</div>'
    : '<a class="link-hit" href="'+esc(url)+'" target="_blank" rel="noopener"><div class="'+cls+'">'+inner+'</div></a>';
  return '<div class="link">'+hd+chin+
    '<button class="kebab" type="button" aria-label="Bagikan '+label+'" data-share="'+esc(url)+'">'+DOTS+'</button></div>';
}

function prodCard(it){
  if (!it || (!it.nama && !it.url)) return '';
  var url = safeUrl(it.url), nm = esc(it.nama || '');
  var tag = it.label ? '<span class="plabel">'+esc(it.label)+'</span>' : '';
  var hrg = (SH.tampilkanHarga !== false && it.harga) ? '<div class="pprice">'+esc(it.harga)+'</div>' : '';
  return '<div class="pcard">'+
    '<a class="link-hit" href="'+esc(url)+'" target="_blank" rel="noopener">'+
      '<div class="pimg">'+tag+(it.gambar?'<img src="'+esc(img(it.gambar))+'" alt="'+nm+'" loading="lazy" decoding="async" referrerpolicy="no-referrer">':'')+'</div>'+
      '<div class="pinfo"><div class="ptitle">'+nm+'</div>'+hrg+'</div>'+
    '</a>'+
    '<button class="kebab" type="button" aria-label="Bagikan '+nm+'" data-share="'+esc(url)+'">'+DOTS+'</button></div>';
}

var panelLinks = '<div class="panel" id="panel-links"'+(adaShop?' role="tabpanel" aria-labelledby="tab-links"':'')+'>'+
  '<div class="links">'+L.map(linkCard).join('')+'</div></div>';

var panelShop = '';
if (adaShop){
  var sHead = (SH.judul || SH.keterangan)
    ? '<div class="shop-head">'+
        (SH.judul ? '<div class="shop-title">'+esc(SH.judul)+'</div>' : '')+
        (SH.keterangan ? '<div class="shop-desc">'+esc(SH.keterangan)+'</div>' : '')+
      '</div>' : '';
  var btm = (SH.tombolBawah && SH.tombolBawah.url && SH.tombolBawah.teks)
    ? '<a class="shop-cta" href="'+esc(safeUrl(SH.tombolBawah.url))+'" target="_blank" rel="noopener">'+esc(SH.tombolBawah.teks)+'</a>' : '';
  panelShop = '<div class="panel" id="panel-shop" role="tabpanel" aria-labelledby="tab-shop" hidden>'+
    sHead+'<div class="shop-grid">'+SH.produk.map(prodCard).join('')+'</div>'+btm+'</div>';
}

var socials = !SO.length ? '' :
  '<nav class="socials" aria-label="Media sosial">'+SO.map(function(s){
    if (!s || !s.url) return '';
    return '<a class="social" href="'+esc(safeUrl(s.url))+'"'+
      (/^mailto:/i.test(s.url)?'':' target="_blank" rel="noopener"')+
      ' aria-label="'+esc(s.jenis||'Tautan')+'">'+(icon(s.jenis)||icon('website'))+'</a>';
  }).join('')+'</nav>';

document.getElementById('app').innerHTML =
  '<div class="frame"><div class="profile'+(pakaiHero?'':' no-hero')+'">'+
    '<div class="topbar"><button class="icon-btn" id="shareBtn" type="button" aria-label="Bagikan halaman ini">'+
      '<svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z"/></svg>'+
    '</button></div>'+
    '<div class="hero-wrap">'+(pakaiHero?'<div class="hero"><img src="'+esc(G.fotoAtas)+'" alt="" fetchpriority="high" decoding="async" referrerpolicy="no-referrer"></div>':'')+'</div>'+
    '<div class="content" id="content">'+
      '<h1 class="sr-only">'+esc(judul)+'</h1>'+head+
      '<p class="bio">'+esc(P.bio || '')+'</p>'+
      verified+tabs+panelLinks+panelShop+socials+
    '</div>'+
  '</div></div>';

/* ---- gambar gagal dimuat (internet lambat / host mati) ----
   Logo diganti tulisan nama; foto lain disembunyikan rapi. */
var logoImg = document.querySelector('.logo');
if (logoImg){
  var fixLogo = function(){
    if (logoImg.classList.contains('img-fail')) return;
    var d = document.createElement('div');
    d.className = 'name-text';
    d.textContent = P.namaTeks || judul;
    logoImg.parentNode.insertBefore(d, logoImg);
    logoImg.classList.add('img-fail');
  };
  if (logoImg.complete && logoImg.naturalWidth === 0) fixLogo();
  logoImg.addEventListener('error', fixLogo);
}
document.querySelectorAll('img').forEach(function(im){
  if (im.classList.contains('img-fail')) return;
  var fail = function(){ im.classList.add('img-fail'); };
  if (im.complete && im.naturalWidth === 0) fail();
  im.addEventListener('error', fail);
});

/* ---- tab ---- */
var tabsRoot = document.getElementById('tabs');
if (tabsRoot){
  var tEls = [].slice.call(document.querySelectorAll('[role="tab"]'));
  var pick = function(t, focus){
    tEls.forEach(function(x){
      var on = x === t;
      x.setAttribute('aria-selected', String(on));
      x.tabIndex = on ? 0 : -1;
      var pn = document.getElementById(x.getAttribute('aria-controls'));
      if (pn) pn.hidden = !on;
    });
    tabsRoot.dataset.active = (t.id === 'tab-shop') ? 'shop' : 'links';
    if (focus) t.focus();
  };
  tEls.forEach(function(t,i){
    t.addEventListener('click', function(){ pick(t,false); });
    t.addEventListener('keydown', function(e){
      var d = {ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1}[e.key];
      if (d){ e.preventDefault(); pick(tEls[(i+d+tEls.length)%tEls.length], true); }
      else if (e.key==='Home'){ e.preventDefault(); pick(tEls[0],true); }
      else if (e.key==='End'){ e.preventDefault(); pick(tEls[tEls.length-1],true); }
    });
  });
}

/* ---- share ---- */
var toast = document.getElementById('toast'), tt;
function showToast(m){
  toast.textContent = m; toast.classList.add('show');
  clearTimeout(tt); tt = setTimeout(function(){ toast.classList.remove('show'); }, 2200);
}
function legacyCopy(text){
  var ta = document.createElement('textarea');
  ta.value = text; ta.setAttribute('readonly','');
  ta.style.cssText = 'position:fixed;top:0;left:-9999px;opacity:0';
  document.body.appendChild(ta); ta.select();
  try { ta.setSelectionRange(0, text.length); } catch(e){}
  var ok = false;
  try { ok = document.execCommand('copy'); } catch(e){ ok = false; }
  document.body.removeChild(ta);
  return ok;
}
function share(url, title){
  var abs; try { abs = new URL(url, location.href).href; } catch(e){ abs = url; }
  var data = { title: title || document.title, url: abs };
  function fb(){ showToast(legacyCopy(abs) ? 'Link tersalin ✓' : 'Tekan ⌘ / Ctrl + C'); }
  if (navigator.share && (!navigator.canShare || navigator.canShare(data))){
    navigator.share(data).catch(function(e){ if (e && e.name !== 'AbortError') fb(); });
  } else if (navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(abs).then(function(){ showToast('Link tersalin ✓'); }).catch(fb);
  } else fb();
}
var sb = document.getElementById('shareBtn');
if (sb) sb.addEventListener('click', function(){ share(location.href, document.title); });
document.querySelectorAll('[data-share]').forEach(function(b){
  b.addEventListener('click', function(e){
    e.preventDefault(); e.stopPropagation();
    share(b.getAttribute('data-share'), b.getAttribute('aria-label'));
  });
});

var vt;
function setVH(){ document.documentElement.style.setProperty('--vh', (window.innerHeight*0.01)+'px'); }
setVH();
window.addEventListener('resize', function(){ clearTimeout(vt); vt = setTimeout(setVH,100); }, {passive:true});
window.addEventListener('orientationchange', setVH, {passive:true});
})();

/* ============================================================================
   MESIN ANIMASI — membaca BAGIAN 6 (ANIMASI). Tidak perlu diubah.
   ============================================================================ */
(function(){
'use strict';

var A = (typeof ANIMASI !== 'undefined' && ANIMASI) ? ANIMASI : {};
function on(k, def){ return A[k] === undefined ? (def !== false) : A[k] === true; }

var root = document.documentElement;
var hemat = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var AKTIF = (A.aktif !== false) && !hemat;

if (!AKTIF){
  /* animasi mati: pastikan semua elemen terlihat normal */
  root.classList.remove('anim-on');
  return;
}

var spd = parseFloat(A.kecepatan);
if (!isFinite(spd) || spd <= 0) spd = 1;
spd = Math.min(3, Math.max(.3, spd));
root.style.setProperty('--anim-speed', spd);

/* ---------- deteksi perangkat lemah / hemat data ---------- */
function perluModeHemat(){
  var m = String(A.modeHemat === undefined ? 'auto' : A.modeHemat).toLowerCase();
  if (m === 'selalu' || m === 'always' || m === 'true') return true;
  if (m === 'jangan' || m === 'never'  || m === 'false') return false;

  var n = navigator || {};
  /* pengguna minta hemat data */
  var c = n.connection || n.mozConnection || n.webkitConnection;
  if (c){
    if (c.saveData === true) return true;
    if (/^(slow-2g|2g|3g)$/.test(String(c.effectiveType || ''))) return true;
  }
  /* RAM kecil (<= 4 GB) atau inti prosesor sedikit (<= 4) */
  if (typeof n.deviceMemory === 'number' && n.deviceMemory <= 4) return true;
  if (typeof n.hardwareConcurrency === 'number' && n.hardwareConcurrency <= 4) return true;
  return false;
}
var LITE = perluModeHemat();

root.classList.add('anim-on');
if (LITE) root.classList.add('anim-lite');
if (on('masukHalaman'))       root.classList.add('fx-enter');
if (on('fotoBernapas'))       root.classList.add('fx-hero');
if (on('logoMengambang'))     root.classList.add('fx-logo');
if (on('hoverTombol'))        root.classList.add('fx-hover');
if (on('kilauTombol') && !LITE) root.classList.add('fx-shine');
if (on('efekSentuh'))         root.classList.add('fx-ripple');
if (on('ikonSosialMemantul')) root.classList.add('fx-social');
if (on('lencanaBerkilau'))    root.classList.add('fx-badge');

var profile = document.querySelector('.profile');
if (!profile) return;

/* ---------- 1. garis progres scroll ---------- */
if (on('garisProgres') && !LITE){
  var bar = document.createElement('div');
  bar.className = 'scroll-progress';
  bar.setAttribute('aria-hidden','true');
  document.body.appendChild(bar);
  var ticking = false;
  var update = function(){
    var h = document.documentElement.scrollHeight - window.innerHeight;
    var p = h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0;
    bar.style.transform = 'scaleX(' + p + ')';
    ticking = false;
  };
  window.addEventListener('scroll', function(){
    if (!ticking){ ticking = true; requestAnimationFrame(update); }
  }, {passive:true});
  window.addEventListener('resize', update, {passive:true});
  update();
}

/* ---------- 2. entrance halaman ---------- */
var step = parseInt(A.jedaAntarTombol, 10);
if (!isFinite(step)) step = 80;
step = Math.min(400, Math.max(0, step));

if (on('masukHalaman')){
  var logo = document.querySelector('.logo') || document.querySelector('.name-text');
  if (logo) logo.classList.add('pop-in');
  ['.bio', '.verified', '.tabs', '.socials'].forEach(function(sel, k){
    var el = document.querySelector(sel);
    if (!el) return;
    el.classList.add('fade-up');
    el.style.setProperty('--d', (220 + k * 70) + 'ms');
  });
}

/* jeda memantul untuk ikon sosial */
document.querySelectorAll('.socials .social').forEach(function(el, i){
  el.style.setProperty('--d', (i * 140) + 'ms');
});

/* ---------- 3. muncul saat scroll ---------- */
var cards = [].slice.call(document.querySelectorAll('.link, .pcard, .shop-cta'));

if (on('munculSaatScroll') && cards.length && 'IntersectionObserver' in window){
  cards.forEach(function(c){ c.classList.add('card-reveal'); });

  var seen = 0;
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if (!en.isIntersecting) return;
      var el = en.target;
      var d = (seen % 6) * step;
      el.style.setProperty('--d', d + 'ms');
      seen++;
      el.classList.add('is-in');
      io.unobserve(el);
      /* lepas kelas reveal setelah selesai supaya hover tetap responsif */
      setTimeout(function(){
        el.classList.remove('card-reveal','is-in');
        el.style.removeProperty('--d');
      }, d + 700 * spd);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });

  cards.forEach(function(c){ io.observe(c); });

  /* jaring pengaman: kalau observer tak jalan, tampilkan semua */
  setTimeout(function(){
    cards.forEach(function(c){ c.classList.add('is-in'); });
  }, 2600);
} else {
  cards.forEach(function(c){ c.classList.add('is-in'); });
}

/* ---------- 4. riak sentuh (ripple) ---------- */
if (on('efekSentuh') && !LITE){
  var targets = '.link, .pcard, .shop-cta, .icon-btn, .tab';
  document.addEventListener('pointerdown', function(e){
    var host = e.target.closest ? e.target.closest(targets) : null;
    if (!host) return;
    var cs = getComputedStyle(host);
    if (cs.position === 'static') host.style.position = 'relative';
    var r = host.getBoundingClientRect();
    var size = Math.max(r.width, r.height);
    var sp = document.createElement('span');
    sp.className = 'ripple';
    sp.style.width = sp.style.height = size + 'px';
    sp.style.left = (e.clientX - r.left - size / 2) + 'px';
    sp.style.top  = (e.clientY - r.top  - size / 2) + 'px';
    host.appendChild(sp);
    setTimeout(function(){ if (sp.parentNode) sp.parentNode.removeChild(sp); }, 700 * spd);
  }, {passive:true});
}

/* ---------- 5. matikan animasi berulang setelah selesai ----------
   Begitu putaran terakhir habis, elemen ditandai 'data-done' sehingga
   browser berhenti melukis ulang. CPU/GPU kembali idle, baterai aman.      */
[].slice.call(document.querySelectorAll(
  '.hero img, .logo, .name-text, .socials .social, .verified .vbadge'
)).forEach(function(el){
  el.addEventListener('animationend', function(e){
    if (e.target !== el) return;
    if (/kenBurns|floaty|socialBob|badgePulse/.test(e.animationName)){
      el.setAttribute('data-done','');
      el.style.willChange = 'auto';
    }
  });
});

/* ---------- 6. hentikan animasi yang keluar dari layar ----------
   Hero yang tergulir jauh ke atas tidak perlu terus dianimasikan.          */
if ('IntersectionObserver' in window){
  var heroImg = document.querySelector('.hero img');
  if (heroImg){
    new IntersectionObserver(function(en){
      heroImg.style.animationPlayState = en[0].isIntersecting ? 'running' : 'paused';
    }, {threshold:0}).observe(heroImg);
  }
}

/* ---------- 7. hemat baterai: jeda animasi saat tab disembunyikan ---------- */
document.addEventListener('visibilitychange', function(){
  root.classList.toggle('anim-paused', document.hidden);
});
})();

/* ============================================================================
   BAGIAN 7 — SINKRONISASI LINK PREVIEW (jangan dihapus)
   ----------------------------------------------------------------------------
   Menyalin judul & bio (BAGIAN 2) dan foto (BAGIAN 1) ke tag meta pratinjau
   di <head>, supaya judul tab, deskripsi, dan kartu pratinjau selalu
   konsisten dengan isi halaman setiap kali dibuka.

   CATATAN: WhatsApp/Facebook/Twitter/Telegram tidak menjalankan JavaScript
   saat "membaca" link. Tag statis berlabel "EDIT" di <head> adalah yang
   mereka pakai. Ubah tag itu kalau isi halaman berubah.
   ============================================================================ */
(function(){
  try {
    function setMeta(attr, key, value){
      var sel = attr === 'property'
        ? 'meta[property="' + key + '"]'
        : 'meta[name="' + key + '"]';
      var el = document.querySelector(sel);
      if (!el){
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      if (value) el.setAttribute('content', value);
    }

    var P = (typeof PENGATURAN !== 'undefined') ? PENGATURAN : {};
    var G = (typeof GAMBAR !== 'undefined') ? GAMBAR : {};

    var judul = P.judulHalaman || P.namaTeks || 'Denji Web';
    var bio   = P.bio || '';
    var foto  = G.fotoAtas || G.logo || '';

    // meta "description" klasik (dipakai mesin pencari)
    setMeta('name', 'description', bio);

    // Open Graph
    setMeta('property', 'og:title', judul);
    setMeta('property', 'og:description', bio);
    setMeta('property', 'og:site_name', judul);
    setMeta('property', 'og:url', location.href);
    if (foto) setMeta('property', 'og:image', foto);

    // Twitter Card
    setMeta('name', 'twitter:title', judul);
    setMeta('name', 'twitter:description', bio);
    if (foto) setMeta('name', 'twitter:image', foto);
  } catch(e){
    // Jika ada kesalahan, tag statis di <head> tetap bekerja.
  }
})();

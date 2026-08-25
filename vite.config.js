import { defineConfig } from 'vite';

// Konfigurasi kecil untuk nyaman saat development:
// - host: true        -> server bisa dibuka dari HP di jaringan yang sama
// - allowedHosts: true-> mengizinkan host preview (mis. tunnel/e2b)
export default defineConfig({
  server: {
    host: true,
    allowedHosts: true,
  },
});

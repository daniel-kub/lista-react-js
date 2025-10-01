import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',       // pozwala na dostęp spoza kontenera
    port: 80,              // port serwera w kontenerze
    strictPort: true,      // jeśli port jest zajęty, wywali błąd
    hmr: {
      host: 'lista.techrabka.eu', // domena, z której będzie się łączyć HMR
    }
  }
})

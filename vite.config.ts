import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: true, // Configura o servidor para escutar em todas as interfaces de rede
    port: 3000, // Define a porta do servidor (opcional, se você quiser usar uma porta específica)
    // Se você estiver atrás de um proxy, pode ser necessário configurar o cabeçalho 'X-Forwarded-For'
    hmr: {
      // Configurações do Hot Module Replacement, se necessário
    }
  }
})

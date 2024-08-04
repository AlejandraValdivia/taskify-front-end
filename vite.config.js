import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      VITE_EXPRESS_BACKEND_URL: JSON.stringify('https://taskify-back-end.onrender.com')
    }
  }
});


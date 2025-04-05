import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { inspectorServer } from '@react-dev-inspector/vite-plugin';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), inspectorServer(), react()],
});

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          about: path.resolve(__dirname, 'about/index.html'),
          services: path.resolve(__dirname, 'services/index.html'),
          experience: path.resolve(__dirname, 'experience/index.html'),
          generalDentistry: path.resolve(__dirname, 'services/general-dentistry/index.html'),
          teethCleaning: path.resolve(__dirname, 'services/teeth-cleaning/index.html'),
          dentalFillings: path.resolve(__dirname, 'services/dental-fillings/index.html'),
          rootCanalTreatment: path.resolve(__dirname, 'services/root-canal-treatment/index.html'),
          toothExtraction: path.resolve(__dirname, 'services/tooth-extraction/index.html'),
          bracesClearAligners: path.resolve(__dirname, 'services/braces-clear-aligners/index.html'),
          crownsBridges: path.resolve(__dirname, 'services/crowns-bridges/index.html'),
          cosmeticDentistry: path.resolve(__dirname, 'services/cosmetic-dentistry/index.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'node:process';
export default defineConfig({ plugins: [react()], base: process.env.GITHUB_ACTIONS === 'true' ? '/sync-clinica-landing/' : '/', server: { host: '127.0.0.1', port: 3018, strictPort: true } });

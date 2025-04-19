import { defineConfig } from 'vite';
import rabbitTEA from '../../src/index';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        rabbitTEA(),
        tailwindcss()
    ],
});
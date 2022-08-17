import { defineConfig } from 'vite';
import fs from 'fs';

const HTML_REGEXP = /\.html$/

export default defineConfig({
  plugins: [
    {
      name: 'htmlToString',
      transform(src, id) {
        if (HTML_REGEXP.test(id)) {
          return `export default ${JSON.stringify(src)}`
        }
      }
    }
  ]
})

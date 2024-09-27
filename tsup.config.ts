// tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'styles.css'],    // Entrada principal
  format: ['cjs', 'esm'],     // Formatos CommonJS y ESM
  dts:{
    entry: [
      "src/index.ts",
    ]
  },               // Generar archivo de tipos (.d.ts)
  sourcemap: true,            // Generar sourcemap
  minify: true,               // Minimizar el código
  clean: true,                // Limpiar la carpeta dist antes de cada build
  outExtension({ format }) {
    return {
      js: format === 'cjs' ? '.cjs.js' : '.esm.js'  // Generar los archivos con las extensiones correctas
    };
  },
});

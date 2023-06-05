import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        // Additional Sass-related options
        // implementation: require("sass"), // Use 'dart-sass' instead of the default 'node-sass'
        // fiber: require("fibers"), // Use fibers for better performance (requires 'sass' package version >= 1.32.0)
        // indentedSyntax: true, // Enable support for the indented syntax (Sass)
        // sourceMap: true, // Generate source maps for easier debugging
        // ...other options
      },
    },
  },
});

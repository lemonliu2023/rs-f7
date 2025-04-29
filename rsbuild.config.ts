import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  server: {
    // base: '/rs-f7'
  },
  plugins: [pluginReact()],
});

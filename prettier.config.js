/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  // Tailwind CSS v4 requires specifying the stylesheet entry
  // so the plugin can resolve theme and utilities correctly.
  tailwindStylesheet: "./src/styles/globals.css",
};

export default config;

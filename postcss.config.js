module.exports = {
    plugins: [
      require("postcss-easy-import")({ prefix: "_" }),
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer")({})
    ]
  };
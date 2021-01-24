const { resolve, basename } = require("path");
const { copyFile, emptyDirSync } = require("fs-extra");

module.exports = (ctx) => {
  const assetsDir = resolve(ctx.options.distDir, "css");
  emptyDirSync(assetsDir);

  return {
    plugins: {
      "postcss-import": {},
      "postcss-url": [
        {
          url: (asset) => {
            const base = basename(asset.absolutePath);
            copyFile(asset.absolutePath, resolve(assetsDir, base));

            return `./css/${base}`;
          },
        },
      ],
      tailwindcss: {},
      autoprefixer: {},
      cssnano: !ctx.options.isDev && {},
    },
  };
};

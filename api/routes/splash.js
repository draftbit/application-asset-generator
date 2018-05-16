"use strict";

const generateAssets = require("../../lib");

module.exports = async (request, h) => {
  const { logoUrl, backgroundUrl, color } = request.query;

  await generateAssets({
    logoImageUrl: logoUrl,
    backgroundImageUrl: backgroundUrl,
    color,
    outputDir: "./"
  });

  return h.file("./splash.png");
};

"use strict";

const generateAssets = require("../../lib");

module.exports = async (request, h) => {
  const { logoUrl, color } = request.query;

  await generateAssets({ logoImageUrl: logoUrl, color, outputDir: "./" });

  return h.file("./icon.png");
};

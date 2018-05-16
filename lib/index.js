"use strict";

const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

const { processIcon, processSplash } = require("../lib/imageProcessor");

const TEMP_LOGO_FILENAME = "tmp_logo.png";
const TEMP_BACKGROUND_FILENAME = "tmp_background.png";

module.exports = async ({
  logoImagePath,
  logoImageUrl,
  backgroundImagePath,
  backgroundImageUrl,
  color,
  outputDir
}) => {
  let logo;
  if (logoImageUrl) {
    await fetch(logoImageUrl).then(async res => {
      const dest = fs.createWriteStream(TEMP_LOGO_FILENAME, {
        autoClose: true
      });

      await new Promise(resolve => {
        res.body.pipe(dest).on("close", () => {
          resolve();
        });
      });
    });

    logo = TEMP_LOGO_FILENAME;
  } else {
    logo = logoImagePath;
  }

  let backgroundImage;
  if (backgroundImageUrl) {
    await fetch(backgroundImageUrl).then(async res => {
      const dest = fs.createWriteStream(TEMP_BACKGROUND_FILENAME, {
        autoClose: true
      });

      await new Promise(resolve => {
        res.body.pipe(dest).on("close", () => {
          resolve();
        });
      });
    });

    backgroundImage = TEMP_BACKGROUND_FILENAME;
  } else {
    backgroundImage = backgroundImagePath;
  }

  await processIcon({
    logo,
    color,
    outputFile: path.join(outputDir, "icon.png")
  });

  await processSplash({
    logo,
    backgroundImage,
    color,
    outputFile: path.join(outputDir, "splash.png")
  });

  if (logoImageUrl) {
    fs.unlinkSync(TEMP_LOGO_FILENAME);
  }

  if (backgroundImageUrl) {
    fs.unlinkSync(TEMP_BACKGROUND_FILENAME);
  }
};

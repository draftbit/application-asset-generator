"use strict";

const gm = require("gm");

async function processIcon({ logo, color, outputFile }) {
  return new Promise((resolve, reject) => {
    gm(logo)
      .resize(750, 750)
      .background(`#${color}`)
      .flatten()
      .gravity("Center")
      .extent(1024, 1024)
      .write(outputFile, function(err) {
        if (err) reject(err);
        resolve();
      });
  });
}

async function processSplash({ logo, backgroundImage, color, outputFile }) {
  return new Promise((resolve, reject) => {
    if (backgroundImage) {
      gm()
        .in("-geometry", "1242x2436")
        .in(backgroundImage)
        .in("-geometry", "350x350")
        .in("-page", "+471+1038")
        .in(logo)
        .flatten()
        .write(outputFile, function(err) {
          if (err) {
            console.log(err);
            reject(err);
          }
          resolve();
        });
    } else {
      gm(logo)
        .resize(350, 350)
        .background(`#${color}`)
        .flatten()
        .gravity("Center")
        .extent(1242, 2436)
        .write(outputFile, function(err) {
          if (err) reject(err);
          resolve();
        });
    }
  });
}

module.exports = { processIcon, processSplash };

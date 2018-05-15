"use strict";

const gm = require("gm");
const path = require("path");
const fetch = require("node-fetch");

const argv = require("yargs").argv;
const outputDir = argv.outputDir || __dirname;

async function main() {
  if (
    (!argv.imagePath && !argv.imageUrl) ||
    (argv.imagePath && argv.imageUrl)
  ) {
    console.error("Image path or url is required");
    process.exit(1);
  }

  if (!argv.color) {
    console.error("Color is required");
    process.exit(1);
  }

  if (argv.color.length !== 7 || argv.color[0] !== "#") {
    console.error(
      "Invalid color format. Color should be in hex code format with leading '#'."
    );
    process.exit(1);
  }

  let image;
  if (argv.imageUrl) {
    image = await fetch(argv.imageUrl).then(res => res.buffer());
  } else {
    image = argv.imagePath;
  }

  gm(image)
    .resize(750, 750)
    .background(argv.color)
    .flatten()
    .gravity("Center")
    .extent(1024, 1024)
    .write(path.join(outputDir, "icon.png"), function(err) {
      if (err) console.error(err);
    });

  if (argv.backgroundImagePath) {
    gm()
      .in("-geometry", "1242x2436")
      .in(argv.backgroundImagePath)
      .in("-geometry", "350x350")
      .in("-page", "+471+1038")
      .in(image)
      .flatten()
      .write(path.join(outputDir, "splash.png"), function(err) {
        if (err) console.error(err);
      });
  } else {
    gm(image)
      .resize(350, 350)
      .background(argv.color)
      .flatten()
      .gravity("Center")
      .extent(1242, 2436)
      .write(path.join(outputDir, "splash.png"), function(err) {
        if (err) console.error(err);
      });
  }
}

main();

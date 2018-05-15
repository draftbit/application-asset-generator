# Application Asset Generator

A tool to quickly generate mobile app assets. Supports [just about any format you can think of](http://www.graphicsmagick.org/formats.html).

## Requirements

* GraphicsMagick (`brew install graphicsmagick`, `port install GraphicsMagick`)
* If using Illustrator files (.ai or .eps), ghostscript (`brew install ghostscript`, `port install ghostscript`)

## Getting Started

* Run `yarn` or `npm install`
* `yarn start` to run server
* `yarn process --imagePath= --color= [--outputDir=]` OR `yarn start --imageUrl= --color= [--outputDir=]`

## API Usage

* `/icon` - Generates an app icon with the logo centered over a background color
  ** `logoUrl` - The URL of the logo to use for the app icon
  ** `color` - The hex value of the background color of the app icon
* `/splash` - Generates a splash screen with the logo centered over a background color or image
  ** `logoUrl` - The URL of the logo to use for the splash screen
  ** `color` - The hex value of the background color of the splash screen. Either `color` or `backgroundUrl` is required
  \*\* `backgroundUrl` - The URL of the image to use for the background of the splash screen. Either `color` or `backgroundUrl` is required

## `yarn process` Arguments

* **imagePath** The path of the input logo image to be used for asset generation. Either `imagePath` or `imageUrl` is required
* **imageUrl** The URL of the input logo image to be used for asset generation. Either `imagePath` or `imageUrl` is required
* **color** The color to use as the asset background color
* (Optional) **backgroundImagePath** The path of the image to use as the background of the splash screen
* (Optional) **backgroundImageUrl** The URL of the image to use as the background of the splash screen
* (Optional) **outputDir** The directory to output the assets. If not specified, the current directory will be used

"use strict";

require("dotenv").load();

const fs = require("fs");
const Hapi = require("hapi");
const Joi = require("joi");

const { PORT } = process.env;

async function main() {
  const server = Hapi.server({ port: PORT });

  await server.register(require("inert"));

  server.route([
    {
      method: "GET",
      path: "/",
      handler: () => "👋🏼"
    },
    {
      method: "GET",
      path: "/icon",
      config: {
        validate: {
          query: {
            imageUrl: Joi.string()
              .uri()
              .required(),
            color: Joi.alternatives().try([
              Joi.string()
                .length(6)
                .hex()
                .required(),
              Joi.string()
                .length(3)
                .hex()
                .required()
            ])
          }
        }
      },
      handler: require("./routes/icon")
    },
    {
      method: "GET",
      path: "/splash",
      config: {
        validate: {
          query: {
            imageUrl: Joi.string()
              .uri()
              .required(),
            color: Joi.alternatives().try([
              Joi.string()
                .length(6)
                .hex()
                .required(),
              Joi.string()
                .length(3)
                .hex()
                .required()
            ])
          }
        }
      },
      handler: require("./routes/splash")
    }
  ]);

  await server.start();
  console.log(`Server started at http://localhost:${server.info.port}`);
}

main();

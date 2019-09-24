"use strict";

const queryString = require("querystring");

module.exports.hello = async (event, context, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hola ${event.pathParameters.name}`,
        input: event.name
      },
      null,
      2
    )
  };
};

module.exports.showUser = async (event, context, callback) => {
  const body = queryString.parse(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Peticion POST`,
        input: `Hola ${body.name} ${body.lastName}`
      },
      null,
      2
    )
  };
};

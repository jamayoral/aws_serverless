"use strict";

const passwordLength = require("./constraints/passwordLength");

module.exports.password = async (event, context, cb) => {
  try {
    const { password } = event.pathParameters;
    await passwordLength(password);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Todo ok: " + password
      })
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `Error: ${error.message}`
      })
    };
  }
};

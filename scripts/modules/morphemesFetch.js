// Fetches all morphemes in a given phrase

const fetch = require('node-fetch');
const config = require('../config.js');

module.exports = async function (string) {
  const morphemeBody = JSON.stringify({
    app_id: config.gooAppId,
    sentence: string,
    // info_filter: "form",
  });

  const response = await fetch("https://labs.goo.ne.jp/api/morph", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: morphemeBody,
  });

  return await response.json();
};

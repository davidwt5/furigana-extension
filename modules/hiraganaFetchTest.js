import fetch from 'node-fetch';
import config from '../config.js';

export default function () {
  const sentence = "メアリーの日常 12/01/2021";
  const hiraganaConversionBody = JSON.stringify({
    app_id: config.gooAppId,
    sentence: sentence,
    output_type: "hiragana",
  });

  fetch("https://labs.goo.ne.jp/api/hiragana", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: hiraganaConversionBody,
  })
    .then((response) => response.json())
    .then((res) => console.log(res));
};

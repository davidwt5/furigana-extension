import fetch from 'node-fetch';
import config from '../config.js';

export default function () {
  const morpheneBody = JSON.stringify({
    app_id: config.gooAppId,
    sentence: "日本語を分析します 撮ってないでください　取り",
    info_filter: "form",
  });

  fetch("https://labs.goo.ne.jp/api/morph", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: morpheneBody,
  })
    .then((response) => response.json())
    .then((res) => console.log(res));
};

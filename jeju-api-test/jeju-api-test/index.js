// index.js
const fetch = require('node-fetch');

const url = "https://api.visitjeju.net/vsjApi/contents/searchList?" +
            "apiKey=b632f52af1904c04a0f6dbc8139c5fd2" +
            "&locale=kr&category=c1&page=2&cid=CONT_000000000500349";

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log("✅ API 응답 결과:");
    console.log(JSON.stringify(data, null, 2));
  })
  .catch(err => {
    console.error("❌ 에러:", err);
  });
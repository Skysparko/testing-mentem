const express = require("express");
const app = express();
const port = 8000;
const hostname = '3.109.192.138';
app.get("/affiliate/:id", (req, res) => {
    const id = req.params.id
  return res
    .header({
      "Content-Type": "application/json",
      "Set-Cookie": `afffilateId=${id}; Path=/; Secure; SameSite=None;`,
      "access-control-allow-origin": "*",
      "Access-Control-Allow-Credentials": "true",
    })
    .send("maine beja");
});

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const path = require("path");
const app = express();
const port = 8080 ;

app.get("/api/affiliate/:id", (req, res) => {
  const id = req.params.id
  return res
    .header({
      "Content-Type": "application/json",
      "Set-Cookie": `afffilateId=${id}; Path=/; Secure; SameSite=None;`,
      "access-control-allow-origin": "https://65-2-142-47.sslip.io",
      "Access-Control-Allow-Credentials": "true",
    })
    .send("maine beja");
});

app.use(express.static(path.join(__dirname, "./build")))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(
 path.resolve(__dirname)
));

app.get("/", 
 (req, res) => res.sendFile(
  path.join(__dirname, "index.html")
  )
 );

 app.listen(port, () => console.log(`App is running on port ${port}`));

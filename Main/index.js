import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const d = new Date();
  const day = d.getDay();
  const cday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let dayy = "";
  let advicee = "";

  if (day >= 5) {
    (dayy = cday[day]), (advicee = "its time to work hard");
  } else {
    (dayy = cday[day]), (advicee = "its time to relax");
  }

  res.render("index.ejs", {
    dayType: dayy,
    advice: advicee,
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

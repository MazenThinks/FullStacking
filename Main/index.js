/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      name: "url",
      message: "Enter your url:",
    },
  ])
  .then((answers) => {
    console.log("Submitted!");
    fs.writeFile("urltext", answers.url, (err) => {
      if (err) {
        console.error(err);
      }
    });
    var qr_svg = qr.image(answers.url, { type: "png" });
    qr_svg.pipe(fs.createWriteStream("urlimg.png"));
  });

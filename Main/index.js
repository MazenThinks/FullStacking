const fs = require("fs");

// fs.readFile("message.txt", "Fuck You", (err) => {
//   if (err) {
//     console.error(err);
//   }
// });

fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

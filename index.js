const fs = require('fs')
const heading = 'Hello from my custom heading'
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(time);

const content = `<!DOCTYPE html>

<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
    <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
    <title>MySolon</title>
    <script src="https://swetrix.org/swetrix.js" defer></script>
  </head>
  <body>
    <h1>${heading}</h1 >
    <p>The time is ${time}</p>
    <script>
      document.addEventListener("DOMContentLoaded", () => {
        // Initialising the script with the Project ID
        // you can find in the dashboard
        swetrix.init("9j4Gy9gAGcgQ");

        // Tracking page views
        swetrix.trackViews();
      });
    </script>
  </body >
</html >
  `

try {
  fs.writeFileSync('./custom.html', content)
  //file written successfully
} catch (err) {
  console.error(err)
}


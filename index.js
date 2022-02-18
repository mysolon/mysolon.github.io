const fs = require('fs')
const heading = 'Hello from my custom heading'
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let rawdata = fs.readFileSync('data.json');
let student = JSON.parse(rawdata);

const content = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
    <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="/css/normalize.css" />
    <link rel="stylesheet" href="/style.css" />

    <title>MySolon</title>
    <script src="https://swetrix.org/swetrix.js" defer></script>
  </head>
  <body>
    <header></header>
    <img class="dot" src="/images/logo.jpeg" alt="logo" />
    <div class="container">
      <main>
        <section class="card brutal">
          <h1 class="card__title">MySolonBot</h1>
          <h2 class="card__subtitle">Statistics</h2>
          <p>
            <em>Χρήστες:</em> ${student.users} <br /><em>Υποθέσεις:</em> ${student.cases}<br /><em
              >Τελευταίος έλεγχος:</em
            >
            ${today.toLocaleString('el-GR')}
          </p>
        </section>
      </main>
    </div>
    <script>
      document.addEventListener("DOMContentLoaded", () => {
        // Initialising the script with the Project ID
        // you can find in the dashboard
        swetrix.init("9j4Gy9gAGcgQ");

        // Tracking page views
        swetrix.trackViews();
      });
    </script>
  </body>
</html>

  `

try {
  fs.writeFileSync('./src/index.html', content)
  //file written successfully
} catch (err) {
  console.error(err)
}


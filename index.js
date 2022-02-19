const fs = require('fs')
console.log(__dirname)
const heading = 'Hello from my custom heading'
var ghpages = require('gh-pages');

let today = new Date();
today.setHours(today.getHours() + 2);
let rawdata = fs.readFileSync(__dirname + '/data.json');
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
            🤷🏻<em> Χρήστες:</em> ${student.users} <br />📁<em> Υποθέσεις:</em>
            ${student.cases} <br />
            <br />
            <strong>🏛Hall Of Shame🏛</strong> <br />
            Παλαιότερη δικάσιμος χωρίς εκδοθείσα απόφαση:<br />
            🥇 ${(new Date(student.res.noDec[0].imerominia)).toLocaleDateString('el-GR')} - ${student.res.noDec[0].court}<br />
            🥈 ${(new Date(student.res.noDec[1].imerominia)).toLocaleDateString('el-GR')} - ${student.res.noDec[1].court} <br />🥉 ${(new Date(student.res.noDec[2].imerominia)).toLocaleDateString('el-GR')} - ${student.res.noDec[2].court}<br /><br />
            Παλαιότερη κατάθεση χωρίς εκδοθείσα απόφαση: <br />
            🥇 ${(new Date(student.res.sinceKatathesi[0].katathesi)).toLocaleDateString('el-GR')} - ${student.res.sinceKatathesi[0].court}<br />
            🥈 ${(new Date(student.res.sinceKatathesi[1].katathesi)).toLocaleDateString('el-GR')} - ${student.res.sinceKatathesi[1].court}<br />🥉 ${(new Date(student.res.sinceKatathesi[2].katathesi)).toLocaleDateString('el-GR')} - ${student.res.sinceKatathesi[2].court}<br /><br />
            Μεγαλύτερη απόσταση μεταξύ κατάθεσης και δικασίμου <br/>
            🥇 ${(new Date(student.res.biggestDif[0].katathesi)).toLocaleDateString('el-GR')} - ${(new Date(student.res.biggestDif[0].imerominia)).toLocaleDateString('el-GR')}  ${student.res.biggestDif[0].court}<br />
            🥈 ${(new Date(student.res.biggestDif[1].katathesi)).toLocaleDateString('el-GR')} - ${(new Date(student.res.biggestDif[1].imerominia)).toLocaleDateString('el-GR')}  ${student.res.biggestDif[1].court}<br />🥉 ${(new Date(student.res.biggestDif[2].katathesi)).toLocaleDateString('el-GR')} - ${(new Date(student.res.biggestDif[2].imerominia)).toLocaleDateString('el-GR')}  ${student.res.biggestDif[2].court}<br />
            <br />🕰<em> Τελευταίος έλεγχος:</em>
            ${today.toLocaleString('el-GR')}
          </p >
        </section >
      </main >
    </div >
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
  fs.writeFileSync(__dirname + "/src/index.html", content)
  //file written successfully
} catch (err) {
  console.error(err)
}




ghpages.publish(__dirname + "/src", function (err) { console.log('ho') });



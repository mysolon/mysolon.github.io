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
    <meta name="theme-color" content="#469a7f" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

    <link
      href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap&text=MySoln"
      rel="stylesheet"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="./images/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="./images/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="./images/favicon-16x16.png"
    />
    <link rel="manifest" href="./images/site.webmanifest" />
    <link rel="stylesheet" href="/css/normalize.css" />
    <link rel="stylesheet" href="/style.css" />

    <title>MySolon</title>
    <script src="https://swetrix.org/swetrix.js" defer></script>
  </head>
  <body>
    <header>
      <p class="head-title"><span>MySolon</span></p>
      <p class="head-navigation">
        <a class="links" href="#odigies">Οδηγίες</a>
        <a class="links" href="#stats">Στατιστικά</a>
        <!-- <span></span> <span>Στατιστικά</span> -->
      </p>
    </header>
    <img class="dot" src="/images/logo.jpeg" alt="logo" />

    <div class="container">
      <main>
        <article class="intro">
          <h2>
            To <a href="https://t.me/MySolonBot">MySolonBot</a> σας βοηθάει στην
            παρακολούθηση των υποθέσεών σας στο solon.gov.gr
          </h2>
          <h3 id="odigies">Οδηγίες</h3>
          <p class="">
            Εγκαθιστάτε την εφαρμογή μηνυμάτων Telegram στο κινητό σας ή στον
            υπολογιστή σας <a href="https://telegram.org">telegram.org</a> και
            έπειτα πατάτε τον ακόλουθο σύνδεσμο
            <a href="https://t.me/MySolonBot">MySolonBot</a>. Στη συνέχεια
            πληκτρολογείτε ΓΑΚ και έτος με μορφή /gak αριθμός έτος πχ /gak 123
            2019 (αν γράψετε κάτι μετά το έτος περνάει σαν σημείωση - μέχρι 50
            χαρακτήρες) και από το μενού που θα σας εμφανίσει επιλέγετε
            δικαστήριο και έδρα. Όταν υπάρξει μεταβολή στην κατάσταση της
            υπόθεσης θα σας έρθει ειδοποίηση.
          </p>
          <img
            class="gif"
            src="./images/sample.gif"
            alt="Παράδειγμα εισαγωγής ΓΑΚ"
          />
        </article>
        <article>
          <h3>Προσθήκη σημείωσης</h3>

          <p>
            Γράφοντας <strong>/gak note</strong> και την σημειώση που επιθυμείτε
            πχ. /gak note ΠΑΡΑΔΕΙΓΜΑ, θα σας βγάλει τις υποθέσεις που έχετε
            καταχωρίσει, για να επιλέξετε σε ποια θέλετε να προστεθεί η
            συγκεκριμένη σημείωση.
          </p>
        </article>
        <article>
          <h3>Επιλογή /menu</h3>

          <p>
            Γράφοντας <strong>/menu</strong> θα σας εμφανιστούν παρακάτω
            επιλογές:
          </p>
        </article>
        <article>
          <h3>Διαγραφή καταχωρημένων υποθέσεων</h3>

          <p>
            Γράφοντας <strong>/gak delete</strong> θα σας βγάλει τις υποθέσεις
            που έχετε καταχωρίσει, για να επιλέξετε ποια θέλετε να διαγράψετε.
          </p>
        </article>
        <article>
          <h3>Εμφάνιση κατάστασης υπόθεσης</h3>

          <p>
            Γράφοντας <strong>/gak status</strong> θα σας βγάλει τις υποθέσεις
            που έχετε καταχωρίσει, για να επιλέξετε ποιας θέλετε να δείτε την
            κατάσταση.
          </p>
        </article>

        <article>
          <h3>Επιλογή για υπενθύμιση</h3>

          <p>
            Με την επιλογή <strong>/reminder </strong> θα σας έρχεται υπενθύμιση
            10 ημέρες πριν την ημερομηνία δικασίμου/προθεσμία νεάς τακτικής
            (υπολογίζονται αυτόματα από την εφαρμογή)
          </p>
        </article>
        <article>
          <h3>Παρακολούθηση για άσκηση ένδικου μέσου</h3>

          <p>
            Γράφοντας <strong>/gak efesi </strong> θα σας βγάλει τις υποθέσεις
            που έχετε καταχωρίσει, για να επιλέξετε αυτήν για την οποία θέλετε
            να γίνεται έλεγχος για τυχόν άσκηση ενδίκου μέσου. Αν ασκηθεί κάποιο
            ένδικο μέσο θα σας έρθει ειδοποιήση (ειδοποίηση έρχεται μόνο για το
            πρώτο ένδικο μέσο, σε περίπτωση πχ που ασκηθούν περισσότερες
            εφέσεις).
          </p>
        </article>
        <article>
          <h3>Εισαγωγή πολλαπλών υποθέσεων με αρχείο excel</h3>

          <p>
            Γράφοντας <strong>/excel </strong> το πρόγραμμα θα σας στείλει είναι
            πρότυπο αρχείο excel της μορφής GAK.xlsx στο οποίο περνάτε τα ΓΑΚ
            σας, και μετά το ξαναστέλνετε στο bot, και αποθηκεύει αυτόματα τα
            στοιχεία. Οι ίδιοι περιορισμοί ισχύουν (max 30 ΓΑΚ - και παραπάνω να
            βάλετε απλά δεν θα τα περάσει). Επίσης αν κάποιο ΓΑΚ είναι ήδη
            περασμένο δεν θα το ξαναπεράσει.
          </p>
        </article>
        <article>
          <h3>Εμφάνιση προθεσμιών</h3>
          <p>
            Γράφοντας <strong>/προθεσμίες </strong> θα σας βγάλει τις υποθέσεις
            που έχετε καταχωρίσει, για να επιλέξετε αυτήν για την οποία θέλετε
            να δείτε τις σχετικές προθεσμίες της.
          </p>
        </article>
        <article>
          <h3>Επόμενη εβδομάδα - επόμενος μήνες</h3>
          <p>
            Γράφοντας <strong>/επόμενη_εβδομάδα /επόμενος_μήνας </strong> θα σας
            εμφανίσει τις προθεσμίες-δικασίμους του αντίστοιχου χρονικού
            διαστήματος.
          </p>
        </article>
        <article>
          <h3>Ημερολόγιο</h3>

          <p>
            Γράφοντας <strong>/ημερολόγιο </strong> θα εμφανιστούν οι επόμενες
            δικάσιμοί σας.
          </p>
        </article>

        <article>
          <h3>Συγχρονισμός ημερολογίου</h3>

          <p>
            Γράφοντας <strong>/συγχρονισμός_ημερολογίου </strong> το πρόγραμμα
            θα σας στείλει ένα αρχείο ics με όλα τα events σας για να τα κάνετε
            εισαγωγή στο ημερολόγιό του κινητού ή του υπολογιστή σας.
          </p>
        </article>
        </br>
        

        <section id="stats" class="card elegant">
          <h1 class="card__title">MySolonBot</h1>
          <h2 class="card__subtitle">Statistics</h2>
          <p>
            🤷🏻<em> Χρήστες:</em> ${student.users} <br />📁<em> Υποθέσεις:</em>
            ${student.cases} <br />
            <br />
            <span class="hall"><strong>🏛Hall Of Shame🏛</strong></span> <br />
            Παλαιότερη δικάσιμος χωρίς εκδοθείσα απόφαση:<br />
            🥇 ${(new
    Date(student.res.noDec[0].imerominia)).toLocaleDateString('el-GR')}
            - ${student.res.noDec[0].court}<br />
            🥈 ${(new
    Date(student.res.noDec[1].imerominia)).toLocaleDateString('el-GR')}
            - ${student.res.noDec[1].court} <br />🥉 ${(new
    Date(student.res.noDec[2].imerominia)).toLocaleDateString('el-GR')}
            - ${student.res.noDec[2].court}<br /><br />
            Παλαιότερη κατάθεση χωρίς εκδοθείσα απόφαση: <br />
            🥇 ${(new
    Date(student.res.sinceKatathesi[0].katathesi)).toLocaleDateString('el-GR')}
            - ${student.res.sinceKatathesi[0].court}<br />
            🥈 ${(new
    Date(student.res.sinceKatathesi[1].katathesi)).toLocaleDateString('el-GR')}
            - ${student.res.sinceKatathesi[1].court}<br />🥉 ${(new
    Date(student.res.sinceKatathesi[2].katathesi)).toLocaleDateString('el-GR')}
            - ${student.res.sinceKatathesi[2].court}<br /><br />
            Μεγαλύτερη απόσταση μεταξύ κατάθεσης και δικασίμου <br />
            🥇 ${(new
    Date(student.res.biggestDif[0].katathesi)).toLocaleDateString('el-GR')}
            - ${(new
    Date(student.res.biggestDif[0].imerominia)).toLocaleDateString('el-GR')}
            ${student.res.biggestDif[0].court}<br />
            🥈 ${(new
    Date(student.res.biggestDif[1].katathesi)).toLocaleDateString('el-GR')}
            - ${(new
    Date(student.res.biggestDif[1].imerominia)).toLocaleDateString('el-GR')}
            ${student.res.biggestDif[1].court}<br />🥉 ${(new
    Date(student.res.biggestDif[2].katathesi)).toLocaleDateString('el-GR')}
            - ${(new
    Date(student.res.biggestDif[2].imerominia)).toLocaleDateString('el-GR')}
            ${student.res.biggestDif[2].court}<br />
            <br />🕰<em> Τελευταίος έλεγχος:</em>
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
  fs.writeFileSync(__dirname + "/src/index.html", content)
  //file written successfully
} catch (err) {
  console.error(err)
}




// ghpages.publish(__dirname + "/src", function (err) { console.log('ho') });



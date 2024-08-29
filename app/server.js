const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 8080;

// Configuration de la connexion MySQL
const db = mysql.createConnection({
  host: 'database', // Nom du service de base de données dans Kubernetes
  user: 'user',
  password: 'userpassword',
  database: 'appdb'
});

db.connect(err => {
  if (err) {
    console.error('Erreur de connexion à la base de données: ', err);
    process.exit(1);
  }
  console.log('Connecté à la base de données MySQL');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  
  db.query(query, [username, password], (err, results) => {
    if (err) {
      res.status(500).send('Erreur de serveur');
      return;
    }
    if (results.length > 0) {
      res.redirect('/welcome?username=' + username);
    } else {
      res.status(401).send('Nom d\'utilisateur ou mot de passe invalide');
    }
  });
});

app.get('/welcome', (req, res) => {
  const username = req.query.username;
  res.send(`<h1>Bienvenue, ${username}!</h1>`);
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

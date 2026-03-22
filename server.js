const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const articleRoutes = require('./routes/articleRoutes');

const app = express();
app.use(express.json());

// --- CONNEXION SQLITE (Un simple fichier blog.db va se créer) ---
const db = new sqlite3.Database('./blog.db', (err) => {
    if (err) console.error("❌ Erreur SQLite :", err.message);
    else console.log("✅ Base de données SQLite connectée !");
});

// Création de la table Articles selon le PDF (Page 2)
db.run(`CREATE TABLE IF NOT EXISTS articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titre TEXT NOT NULL,
    contenu TEXT NOT NULL,
    auteur TEXT NOT NULL,
    categorie TEXT NOT NULL,
    tags TEXT,
    date DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

// On partage la connexion "db" avec tout le projet
app.locals.db = db;

// --- CONFIGURATION SWAGGER ---
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: { title: 'API Blog INF222 (SQLite)', version: '1.0.0' },
        servers: [{ url: 'http://localhost:3000/api' }],
    },
    apis: ['./routes/*.js'],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// --- ROUTES ---
app.use('/api', articleRoutes);

app.listen(3000, () => {
    console.log(`🚀 Serveur : http://localhost:3000`);
    console.log(`📖 Swagger : http://localhost:3000/api-docs`);
});
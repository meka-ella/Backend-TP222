# 🚀 INF222 - TAF 1 : API Backend de Blog (Node.js/Express/SQLite)

> **Projet de programmation Web (EC1 - Développement Backend) réalisé via un apprentissage structuré sur CleeRoute.**

---

## 📝 Description
Cette API REST complète permet la gestion d'un blog (CRUD). Elle a été conçue en respectant les principes de l'architecture **MVC** et les bonnes pratiques de développement backend enseignées en Licence 2 Informatique.

## 🛠️ Technologies Utilisées
- **Runtime** : Node.js (v24.14.0)
- **Framework** : Express.js
- **Base de Données** : SQLite3 (Base relationnelle locale)
- **Documentation** : Swagger UI (OpenAPI 3.0)
- **Apprentissage** : Plateforme CleeRoute

## ⚙️ Installation et Lancement

### 1. Cloner le projet
```bash
git clone https://github.com/TON_NOM/Backend-TP222
cd Backend-TP222
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Lancer le serveur
```bash
npx nodemon server.js
```
Le serveur démarrera sur : `http://localhost:3000`

## 📁 Structure du Projet (MVC)
```text
Backend-TP222/
├── controllers/       # Logique métier et gestion des requêtes
├── models/            # Définition des schémas de données (SQLite)
├── routes/            # Définition des points d'entrée (Endpoints)
├── blog.db            # Base de données SQLite générée automatiquement
├── server.js          # Point d'entrée principal de l'application
├── package.json       # Liste des dépendances et scripts
└── README.md          # Documentation du projet
```

## 📖 Documentation API (Swagger)
L'API est entièrement documentée de manière interactive via Swagger UI. 
🔗 **Accès direct** : [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## 📍 Endpoints & Exemples d'utilisation

### 1. Créer un article (POST)
**Endpoint** : `/api/articles`  
**Description** : Crée un nouvel article avec validation des champs.
```json
{
  "titre": "Mon premier article",
  "contenu": "Ceci est le contenu testé via Swagger.",
  "auteur": "Meka",
  "categorie": "Technologie",
  "tags": ["web", "api", "L2"]
}
```
**Réponse attendue** : `201 Created`

### 2. Récupérer tous les articles (GET)
**Endpoint** : `/api/articles`  
**Réponse attendue** : `200 OK` (Liste d'objets JSON)

### 3. Rechercher des articles (GET Search)
**Endpoint** : `/api/articles/search?query=texte`  
**Description** : Recherche dans le titre ou le contenu.
```bash
GET http://localhost:3000/api/articles/search?query=premier
```

### 4. Modifier / Supprimer (PUT / DELETE)
**Endpoints** : `/api/articles/:id`  
**Description** : Requiert l'ID unique de l'article dans l'URL.

## 🛡️ Bonnes Pratiques & Validation
Conformément aux exigences du **TAF 1**, les points suivants ont été implémentés :
- **Validation stricte** : Vérification de la présence des champs obligatoires (Titre, Auteur, Contenu, Catégorie).
- **Codes de Statut HTTP** : 
  - `201` : Création réussie.
  - `200` : Opération réussie.
  - `400` : Requête mal formée (champs manquants).
  - `404` : Ressource non trouvée.
  - `500` : Erreur interne du serveur.
- **Séparation des préoccupations** : Architecture MVC pour une maintenance facilitée.

## 🔗 Dépôt GitHub
Le code source est disponible ici :  
👉 (https://github.com/meka-ella/Backend-TP222)

---
**Auteur** : [meka ella a]  
**Matricule** : [24G2491]  
**Filière** : Licence 2 Informatique  
**Sous la direction de** : Charles Njiosseu, PhD Student (INF222)
```

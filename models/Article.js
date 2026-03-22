const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    titre: { type: String, required: true },
    contenu: { type: String, required: true },
    auteur: { type: String, required: true },
    date: { type: Date, default: Date.now },
    categorie: { type: String, required: true },
    tags: [String]
});

module.exports = mongoose.model('Article', ArticleSchema);
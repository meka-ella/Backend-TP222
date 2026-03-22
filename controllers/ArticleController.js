// 1. CRÉER un article
exports.createArticle = (req, res) => {
    const { titre, contenu, auteur, categorie, tags } = req.body;
    const sql = `INSERT INTO articles (titre, contenu, auteur, categorie, tags) VALUES (?, ?, ?, ?, ?)`;
    const params = [titre, contenu, auteur, categorie, JSON.stringify(tags)];

    req.app.locals.db.run(sql, params, function(err) {
        if (err) return res.status(400).json({ message: "Erreur lors de la création" });
        res.status(201).json({ id: this.lastID, message: "Article créé avec succès !" });
    });
};

// 2. LIRE tous les articles
exports.getAllArticles = (req, res) => {
    const sql = "SELECT * FROM articles";
    req.app.locals.db.all(sql, [], (err, rows) => {
        if (err) return res.status(500).json({ message: "Erreur serveur" });
        res.status(200).json(rows);
    });
};

// 3. LIRE un article par ID
exports.getOneArticle = (req, res) => {
    const sql = "SELECT * FROM articles WHERE id = ?";
    req.app.locals.db.get(sql, [req.params.id], (err, row) => {
        if (!row) return res.status(404).json({ message: "Article non trouvé" });
        res.status(200).json(row);
    });
};

// 4. MODIFIER un article
exports.updateArticle = (req, res) => {
    const { titre, contenu, categorie, tags } = req.body;
    const sql = `UPDATE articles SET titre = ?, contenu = ?, categorie = ?, tags = ? WHERE id = ?`;
    const params = [titre, contenu, categorie, JSON.stringify(tags), req.params.id];

    req.app.locals.db.run(sql, params, function(err) {
        if (this.changes === 0) return res.status(404).json({ message: "Article non trouvé" });
        res.status(200).json({ message: "Article mis à jour !" });
    });
};

// 5. SUPPRIMER un article
exports.deleteArticle = (req, res) => {
    const sql = "DELETE FROM articles WHERE id = ?";
    req.app.locals.db.run(sql, [req.params.id], function(err) {
        if (this.changes === 0) return res.status(404).json({ message: "Article non trouvé" });
        res.status(200).json({ message: "Article supprimé !" });
    });
};

// 6. RECHERCHER (Page 3 du PDF)
exports.searchArticles = (req, res) => {
    const query = `%${req.query.query}%`;
    const sql = "SELECT * FROM articles WHERE titre LIKE ? OR contenu LIKE ?";
    req.app.locals.db.all(sql, [query, query], (err, rows) => {
        res.status(200).json(rows);
    });
};
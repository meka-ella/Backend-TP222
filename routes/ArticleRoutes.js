const express = require('express');
const router = express.Router();
const articleCtrl = require('../controllers/articleController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       required: [titre, contenu, auteur, categorie]
 *       properties:
 *         titre: { type: string }
 *         contenu: { type: string }
 *         auteur: { type: string }
 *         categorie: { type: string }
 *         tags: { type: array, items: { type: string } }
 */

/**
 * @swagger
 * /articles:
 *   post:
 *     summary: Créer un article (POST)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: { $ref: '#/components/schemas/Article' }
 *     responses:
 *       201: { description: Article créé }
 *   get:
 *     summary: Liste complète des articles (GET)
 *     responses:
 *       200: { description: Liste récupérée }
 */
router.post('/articles', articleCtrl.createArticle);
router.get('/articles', articleCtrl.getAllArticles);

/**
 * @swagger
 * /articles/search:
 *   get:
 *     summary: Rechercher un article (GET Search)
 *     parameters:
 *       - in: query
 *         name: query
 *         schema: { type: string }
 *         required: true
 *         description: Texte à chercher dans le titre ou le contenu
 *     responses:
 *       200: { description: Résultats de la recherche }
 */
router.get('/articles/search', articleCtrl.searchArticles);

/**
 * @swagger
 * /articles/{id}:
 *   get:
 *     summary: Voir un article spécifique (GET by ID)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Détails de l'article }
 *       404: { description: Non trouvé }
 *   put:
 *     summary: Modifier un article (PUT)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       content:
 *         application/json:
 *           schema: { $ref: '#/components/schemas/Article' }
 *     responses:
 *       200: { description: Modifié avec succès }
 *   delete:
 *     summary: Supprimer un article (DELETE)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200: { description: Supprimé avec succès }
 */
router.get('/articles/:id', articleCtrl.getOneArticle);
router.put('/articles/:id', articleCtrl.updateArticle);
router.delete('/articles/:id', articleCtrl.deleteArticle);

module.exports = router;
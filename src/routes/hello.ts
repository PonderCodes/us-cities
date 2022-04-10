import express  from "express";
const router = express.Router();

/**
 * @openapi
 * /hello:
 *   get:
 *     summary: GET a greeting from Ponder
 *     responses:
 *       "200":
 *         description: GET reponse from API
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 */
router.get('/', (req, res, next) => {
    res.status(200).json({message: 'Hi!'});
});

module.exports = router;

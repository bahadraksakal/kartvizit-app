const express = require('express');
const cardController = require('../controllers/cardController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/get').post(authMiddleware ,cardController.getCards);
router.route('/add').post(authMiddleware ,cardController.addCards);
router.route('/update/:cardId').put(authMiddleware ,cardController.updateCards);
router.route('/delete/:cardId').post(authMiddleware ,cardController.deleteCards);
module.exports = router;
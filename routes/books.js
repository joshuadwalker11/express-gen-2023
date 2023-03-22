const express = require('express');
const router = express.Router();

router.get('/:fro', function (req, res, next) {
    // get bookid: record
    res.send(req.params.fro);
});

/* GET home page. */
router.get('/:fromId-:toId', function (req, res, next) {
    // get bookid:? record
    res.render('book', { fromId: req.params.fromId, toId: req.params.toId });
});

module.exports = router;

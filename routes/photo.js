const router = require('express').Router();
const photo = require('../model/photo');

router.get('/', async (req, res) => {

    const photos = await photo.getPhotos();

    res.render('photos', photos.rows)

});

router.get('/:photo_id([1-9][0-9]?)', async (req, res) => {

    const photos = await photo.getPhoto(req.params.photo_id);

    res.render('photo', photos.row);

});

module.exports = router;
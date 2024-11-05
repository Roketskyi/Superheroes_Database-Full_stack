const express = require('express');
const multer = require('multer');
const superheroController = require('../controllers/superheroController');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const extension = path.extname(file.originalname);
        const name = file.originalname.replace(extension, '');
        cb(null, `${name}-${Date.now()}${extension}`);
    }
});

const upload = multer({ storage: storage });

const router = express.Router();

router.post('/', upload.array('images'), superheroController.createSuperhero);
router.get('/', superheroController.getSuperheroes);
router.get('/:id', superheroController.getSuperheroById);
router.put('/:id', upload.array('images'), superheroController.updateSuperhero);
router.delete('/:id', superheroController.deleteSuperhero);

module.exports = router;
const Superhero = require('../models/superhero');

exports.createSuperhero = async (req, res) => {
    try {
        const { nickname, real_name, origin_description, superpowers, catch_phrase } = req.body;
        const images = req.files ? req.files.map(file => file.path) : [];

        const superpowersArray = Array.isArray(superpowers) ? superpowers : superpowers ? superpowers.split(',') : [];

        const superhero = await Superhero.create({
            nickname,
            real_name,
            origin_description,
            superpowers: superpowersArray,
            catch_phrase,
            images,
        });
        
        res.status(201).json(superhero);
    } catch (error) {
        res.status(500).json({ error: `Failed to create superhero: ${error.message}` });
    }
};

exports.getSuperheroes = async (req, res) => {
    const limit = 5;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * limit;

    try {
        const superheroes = await Superhero.findAndCountAll({ offset, limit });

        res.json({
            data: superheroes.rows,
            totalPages: Math.ceil(superheroes.count / limit),
        });
    } catch (error) {
        res.status(500).json({ error: `Failed to fetch superheroes: ${error.message}` });
    }
};

exports.getSuperheroById = async (req, res) => {
    try {
        const superhero = await Superhero.findByPk(req.params.id);

        res.json(superhero);
    } catch (error) {
        res.status(404).json({ error: 'Superhero not found' });
    }
};

exports.updateSuperhero = async (req, res) => {
    try {
        const { nickname, real_name, origin_description, superpowers, catch_phrase, existingImages } = req.body;
        let images = req.files ? req.files.map(file => file.path) : [];

        if (existingImages) {
            const existingImagesArray = Array.isArray(existingImages) ? existingImages : JSON.parse(existingImages);

            images = existingImagesArray.concat(images);
        }

        const superpowersArray = Array.isArray(superpowers) ? superpowers : superpowers.split(',');

        await Superhero.update({
            nickname,
            real_name,
            origin_description,
            superpowers: superpowersArray,
            catch_phrase,
            images,
        }, {
            where: { id: req.params.id }
        });

        res.json({ message: 'Superhero updated successfully' });
    } catch (error) {
        console.error(error);

        res.status(500).json({ error: 'Failed to update superhero' });
    }
};

exports.deleteSuperhero = async (req, res) => {
    try {
        const superhero = await Superhero.findByPk(req.params.id);

        if (!superhero) return res.status(404).json({ error: 'Superhero not found' });

        await superhero.destroy();

        res.json({ message: 'Superhero deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete superhero' });
    }
};
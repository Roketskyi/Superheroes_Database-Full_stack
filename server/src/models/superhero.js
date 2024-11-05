const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Superhero = sequelize.define('Superhero', {
    nickname: { type: DataTypes.STRING, allowNull: false },
    real_name: { type: DataTypes.STRING },
    origin_description: { type: DataTypes.TEXT },
    superpowers: { type: DataTypes.ARRAY(DataTypes.STRING) },
    catch_phrase: { type: DataTypes.STRING },
    images: { type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: [] },
});

module.exports = Superhero;
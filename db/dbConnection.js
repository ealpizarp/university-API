const dbConfig = require('./db.config')

const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("../models/user.model")(sequelize, Sequelize);
db.courses = require("../models/course.model")(sequelize, Sequelize);
db.professors = require("../models/professor.model")(sequelize, Sequelize);
db.topics = require("../models/topic.model")(sequelize, Sequelize);
db.internships = require("../models/internship.model")(sequelize, Sequelize);
db.courseInternship = require("../models/courseInternship.model")(sequelize, Sequelize);



module.exports = db


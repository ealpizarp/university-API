module.exports = (sequelize, Sequelize) => {

    const Internship = sequelize.define('Internship', {
        internshipId: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        topicId: {
            type: Sequelize.STRING,
            references: {
                model: `Topics`,
                key: `topicId`

            }
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    })
    
    return Internship
    
    }
    
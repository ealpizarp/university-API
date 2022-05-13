module.exports = (sequelize, Sequelize) => {

    const Topic = sequelize.define('Topic', {
        topicId: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        topic: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    })
    
    return Topic
    
    }
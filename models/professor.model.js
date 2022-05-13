module.exports = (sequelize, Sequelize) => {

    const Professor = sequelize.define('Professor', {
        professorId: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        professorLastName: {
            type: Sequelize.STRING,
            allowNull: false,
        }, 
        professorName: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    })
    
    return Professor
    
    }
    
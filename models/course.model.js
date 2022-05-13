module.exports = (sequelize, Sequelize) => {

    const Course = sequelize.define('Course', {
        courseId: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        subject: {
            type: Sequelize.STRING,
            allowNull: false,
        }, 
        year: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        career: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        weeklyHours: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        professorId: {
            type: Sequelize.STRING,
            references: {
                model: `Professors`,
                key: "professorId"
            }
        }


    })
    
    return Course
    
    }
    
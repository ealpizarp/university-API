module.exports = (sequelize, Sequelize) => {

    const CourseInternship = sequelize.define('CourseInternship', {
        courseId: {
            type: Sequelize.STRING,
            references: {
                model: `Courses`,
                key: `courseId`
            }
        },
        internshipId: {
            type: Sequelize.STRING,
            references: {
                model: `Internships`,
                key: `internshipId`
            }
        },
        hours: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }, 
        date: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        assistant: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        groups: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    })
    
    return CourseInternship
    
    }
    
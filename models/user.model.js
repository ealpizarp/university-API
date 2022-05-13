module.exports = (sequelize, Sequelize) => {

const User = sequelize.define('User', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

return User

}

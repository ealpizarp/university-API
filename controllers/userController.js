require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const db = require ("../db/dbConnection")
const User = db.users


const userCtrl = {}

userCtrl.login = async(req, res) => {

    try {
        const { username, password } = req.body

        if (!await isRegistered(username)) {
            return res.status(500).send("User does not exist")
        }
        if (await authUser(username, password)) {
            const user = { name: username }
            console.log(user)
            const accesToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
            console.log(accesToken)
            return res.json({accesToken: accesToken})
        }

        return res.send("Username or password incorrect")


    } catch { err => {
        res.status(500).send({
            message: err.message || "Some error occurred while user registration"
        })
    }

    }

}


const authUser = async(username, password) => {
    const user = await User.findByPk(username)
    console.log(user)
    const match = await bcrypt.compare(password, user.password)
    if(match) {
        return true
    }
    return false
}

userCtrl.register = async(req, res) => {
    try {
        const {username, password} = req.body
        const hashedPassword = (await bcrypt.hash(password, 10)).toString()

        if (await isRegistered(username)) {
            console.log(isRegistered(username))
            res.status(500).send("Username already registered")

        } else {

            const newUser = {
                username: username,
                password: hashedPassword
            }

            User.create(newUser).then(data => {
                res.send(data);
            }).catch( err => {
                res.status(500).send({
                    message: err.message || "Couldn't register the user in the database"
                })
            })
        }

    } catch { err => {
        res.status(500).send({
            message: err.message || "Some error occurred while user registration"
        })
    }

    }
}

const isRegistered = async (username) => {
    if ( await User.findByPk(username) === null ) {
        return false
    }
    return true
}

module.exports = userCtrl

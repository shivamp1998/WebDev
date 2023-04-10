const Sequalize = require('sequelize');
const { DataTypes, Op } = require('sequelize').DataTypes

const sequalize = new Sequalize('sequelize','root', 'admin', {
    dialect: 'mysql',
});

const User = sequalize.define('user', {
   user_id: {
        type: Sequalize.DataTypes.INTEGER,
        primaryKey: true,
        defaultValue: 1,
        autoIncrement: true,
   }, 
   username: {
        type: Sequalize.DataTypes.STRING,
        allowNull: false
   },
   password: {
        type: Sequalize.DataTypes.STRING
   },
   age: {
        type: Sequalize.DataTypes.INTEGER,
        defaultValue: 21,
        validate: {
            isOldEnough(value) {
                if(value < 21) {
                    throw new Error("too young")
                }
            }            
        }
   },
}, {
    freezeTableName: true
})


// User.sync()
// .then((response) => {
//     const user =  User.build({
//         username: 'Shivam',
//         password: "123",
//         age : 25,
//         justchecking: false
//     })
//     return user.save()
//     return User.create({
//         username: 'oldshivam2',
//         user_id: 3,
//         age: 22,
//         password: 'shivam123'
//     })
// })
// .then((data) => {
//     console.log(data.toJSON())
//     data.username = 'this is not good';
//     return data.save()
// })
// .then((res) => {
//     console.log("user updated")
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// })


User.sync({alter: true})
.then(() => {
    // return User.findAll({attributes: [['username', 'name'], ['password', 'pass']]})
    // return User.findAll({attributes: [[sequalize.fn('SUM', sequalize.col('age')), 'how old']]})
    // return User.findAll({attributes: {exclude: ['password']}})
    // return User.findAll({where: {age: 22}})
    // return User.findAll({order: [['age', 'DESC']]})
    return User.findAll({attributes: [['username', 'username'], [sequalize.fn("SUM", sequalize.col("age")), 'my_age']], group: 'username'})
})
.then((data) => {
    data.forEach((val) => {
        console.log(val.toJSON())
    })
})
.catch((err) => {
    console.log(err)
})

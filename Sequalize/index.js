const Sequalize = require('sequelize');
const { INTEGER, BOOLEAN } = require('sequelize').DataTypes

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
        defaultValue: 21
   },
   justchecking: {
    type: Sequalize.DataTypes.BOOLEAN,
    defaultValue: true
   }   
}, {
    freezeTableName: true
})


User.sync()
.then((response) => {
    // const user =  User.build({
    //     username: 'Shivam',
    //     password: "123",
    //     age : 25,
    //     justchecking: false
    // })
    // return user.save()
    return User.create({
        username: 'oldshivam2',
        user_id: 3,
        age: 22,
        password: 'shivam123'
    })
})
.then((data) => {
    console.log(data.toJSON())
    data.username = 'this is not good';
    return data.save()
})
.then((res) => {
    console.log("user updated")
    console.log(res)
})
.catch((err) => {
    console.log(err)
})


console.log(sequalize.models.user)



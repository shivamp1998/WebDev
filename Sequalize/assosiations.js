const Sequalize = require('sequelize');

const { DataTypes, Op } = Sequalize;

const sequalize = new Sequalize('sequelize', 'root', 'admin', {
    dialect: 'mysql'
})

const Country = sequalize.define('country', {
    countryName: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
})

const capital = sequalize.define('capital', {
    capitalName: {
        type: DataTypes.STRING,
        unique: true
    }
}, {
    timestamps: false
})

sequalize.sync({alter: true})
.then(() => {

})
.catch((err) => {
    console.log(err);
})
module.exports = (sequelize, DataTypes)=>{
    const House = sequelize.define('House', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        meters: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    },{
        tableName: 'house',
        timestamps: false
    });

    const User = sequelize.import('./User');

    House.belongsTo(User, {foreignKey: 'user_id'});

    return House;
};
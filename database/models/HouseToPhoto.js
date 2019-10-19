module.exports = (sequelize, DataTypes) => {
    const HouseToPhoto = sequelize.define('HouseToPhoto', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        house_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        path: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'house_to_photo',
        timestamps: false
    });

    const User = sequelize.import('./User');

    HouseToPhoto.belongsTo(User, {foreignKey: 'user_id'});

    return HouseToPhoto;
};
module.exports = (sequelize, DataTypes) => {
    const UserToPhoto = sequelize.define('UserToPhoto', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        path: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'user_to_photo',
        timestamps: false
    });

    const User = sequelize.import('./User');

    UserToPhoto.belongsTo(User, {foreignKey: 'user_id'});

    return UserToPhoto;
};
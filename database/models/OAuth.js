module.exports = (sequelize, DataTypes)=>{
    const OAuth = sequelize.define('OAuth', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true
        },
        accessToken: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        refreshToken: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: "oauth_token",
        timestamps: false
    });

    const User = sequelize.import('User');
    OAuth.belongsTo(User, {foreignKey: 'user_id'});

    return OAuth;
};
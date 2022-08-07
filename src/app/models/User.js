const {model, DataTypes} = require('sequelize');

class User extends model{
    static init(sequelize){
        super.init(
            {
                name: DataTypes,STRING,
                email: DataTypes,STRING,
                password: DataTypes,STRING,
                status: DataTypes,STRING,
            },
            {
                sequelize,
            }
        );
    }
    static associate(models){
        this.belongsTo(models.Profile,{foreingKey: 'profileId', as: 'profile'});
        this.hasMany(models.Note, {foreingKey: 'userId', as: 'note'});
    }
}
module.exports = User;
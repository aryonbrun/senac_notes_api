const {model, DataTypes} = require('sequelize');

class Profile extends model{
    static init(sequelize){
        super.init(
            {
                name: DataTypes,STRING,
            },
            {
                sequelize,
            }
        );
    }
    static associate(mode){
        this.hasMany(models.User,{foreingKey: 'profileId', as: 'user'});
    }
}
module.exports = Profile;
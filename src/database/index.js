import Sequelize, { DatabaseError } from 'sequelize'
import databaseConfig from '../config/database';

// MODELS

import Profile from '../app/models/Profile';
import User from '../app/models/user';
import Note from '../app/models/Note';

const models = [];

class Database{
    constructor(){
        this.init();
    }

    init(){
        this.connection = new Sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, databaseConfig);

        Profile.init(this.connection);
        User.init(this.connection);
        Note.init(this.connection);

        Profile.associate(this.connection.models);
        User.associate(this.connection.models);
        Note.associate(this.connection.models)
    }
}

export default new Database();
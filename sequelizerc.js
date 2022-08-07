const {resolve} = require('path'); //teste

module.exports = {
    config: resolve(__dirname, 'sec', 'config', 'database.js'),
    'models-path' : resolve(__dirname, 'src','app', 'models'),
    'migration-path' : resolve(__dirname, 'src', 'database', 'migration'),
    'seeders-path' : resolve(__dirname, 'src', 'models', 'database', 'seeds'), 
}
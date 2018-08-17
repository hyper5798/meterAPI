var config = {};

config.port = 8000;

//Authentication
config.auth = false;

//Base Url
config.baseurl = '/v1/';

//Myaql Database
config.database = '';
config.dbHost = '';
config.username = '';
config.password = '';
config.table_prefix = 'api_';
config.dbPort = 3306;
//Key
config.tokenKey = '';
config.generalKey = '';
config.mongoDB = 'mongodb://localhost/test';
//Auth
//Pagination
config.paginate = false;
config.page_limit = 5000;
config.sort = 'desc';
//Zone
config.timezone = 'Asia/Taipei';
//Debug
config.debug = true;
config.isLocalDB = true;
config.isAgri = true;
//Server
config.server = 'http://localhost:'+ config.port + '/';
//MQTT
config.mqttHost = 'localhost';
config.mqttPort = 1883;
config.mytopic = '';
config.mqttName = '';
config.mqttPassword = '';
config.client_Id = '200000107-generic-service-02';
//line-bot
config.channelId = '';
config.channelSecret = '';
config.channelAccessToken = '';
//Is cloudant DB true, is local mongoDB false
config.isCloudantDb = false;
config.isAddLog = false;
//Cloudant DB
config.cloudantAccount = '';
config.cloudantPassword = '';
module.exports = config;

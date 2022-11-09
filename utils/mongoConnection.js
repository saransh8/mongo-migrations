const { getSecrets } = require('./secrets');
const MongoClient = require('mongodb').MongoClient;
let client;

const connect = async (customer) => {
  try {
    console.log(customer.instance)
    // $arn = customer.secret_arn_mongo;
    $arn = "arn:aws:secretsmanager:us-west-2:707112942371:secret:dev-mongodb-cloudrocket-iyH0D2";
    let secret = await getSecrets($arn);
    // let mongoDbUrl = "mongodb+srv://" + secret['username'] + ':' + secret['password'] + '@' + 
    // secret['host'] + '/' +  customer.instance + "?retryWrites=true&w=majority";
    let mongoDbUrl = "mongodb://172.17.0.1:27017/cloudrocket";
    client = await MongoClient.connect(mongoDbUrl);
  } catch (e) {
    throw e;
  }
}

const getDB = () => client.db();

const close = () => client.close();

module.exports = { connect, getDB, close }
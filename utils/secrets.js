const AWS = require("aws-sdk");
const awsCreds = require("../config/awsCreds");

const client = new AWS.SecretsManager({
  region: awsCreds.region,
  endpoint: awsCreds.endpoint,
  accessKeyId: awsCreds.awsKey,
  secretAccessKey: awsCreds.awsSecret
});

const getSecrets = async (SecretId) => {
  const response = await new Promise((resolve, reject) => {
    client.getSecretValue({ SecretId }, (err, result) => {
      if (err) {
        console.error(err);
        reject(err);
      }
      if (result) {
        resolve(result.SecretString);
      }
    });
  });
  console.log(response);
  return JSON.parse(response);
};

module.exports = { getSecrets };
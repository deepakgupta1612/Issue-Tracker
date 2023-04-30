const MongoClient = require('mongodb').MongoClient;
  // const url = "mongodb+srv://anjugupta9213:Dg161299%40@cluster0.hk2xety.mongodb.net/issuedb?retryWrites=true&w=majority"; 


async function getEmpData() {
    let client = await MongoClient.connect(process.env.DB_URL);
     let connection = client.db('issueTracker');   // Establish connection
   return connection.collection('IssueTracker2023');  // creating a collection and naming it also
}

module.exports = getEmpData;


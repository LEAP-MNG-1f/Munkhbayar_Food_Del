import { MongoClient } from "mongodb";

const connectionstring =
  "mongodb+srv://monhbayr2400:M1n11muu@cluster0.9rtw4.mongodb.net/";

const connectDb = async () => {
  const client = new MongoClient(connectionstring);

  let connection;

  try {
    connection = await client.connect();
  } catch (e) {
    console.log("failed to connect db");
  }
  const db = connection.db("sample_mflix");
  return db;
};
export default connectDb;

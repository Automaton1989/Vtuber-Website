const { MongoClient } = require("mongodb");
require("dotenv").config();
const ObjectId = require("mongodb").ObjectId;

//`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@fullauto.io459.mongodb.net/FullAutoDB?retryWrites=true&w=majority`
const url = process.env.MONGODB_URI;
const client = new MongoClient(url, { useUnifiedTopology: true });
const db = client.db("FullAutoDB");
const products = db.collection("products");

async function getProducts() {
	await client.connect();
	const myProducts = await products.find().toArray();
	try {
		return myProducts;
	} catch(e) {
		console.log(e);
	} finally {
		client.close();
	}
}

module.exports = {
	getProducts,
}
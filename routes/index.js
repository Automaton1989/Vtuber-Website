var express = require('express');
var router = express.Router();
const myDB = require("../db/myDB.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json();
});

router.get('/products', async function(req, res) {
  try {
    const products = await myDB.getProducts();
    console.log(products);
    res.send({data: products});
  } catch (e) {
    console.log("Error", e);
    res.status(400).send({err: e});
  } 
})

module.exports = router;

const connection = require("../db");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  console.log("data to be inserted", req.body);
  connection.connect((err) => {
    if (err) {
      return err;
    }
  });
  const sql = "INSERT auth_table WHERE";
  connection.query(sql, function (err, results, rows, fields) {
    if (err) {
      return err;
    } else {
      if (rows.length > 0) {
        res.json({ results });
      } else {
        res.json([]);
      }
    }
    //console.log(result)
  });
});

module.exports = router;

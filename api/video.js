const connection = require("../db");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  connection.connect((err) => {
    if (err) {
      return err;
    }
  });
  console.log("Connected to MySQL Server!");
  const sql = "SELECT * FROM `fe_ui_test` WHERE 1";
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

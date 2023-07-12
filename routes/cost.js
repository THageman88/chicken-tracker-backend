const express = require('express');
const router = express.Router();
const pool = require('../db/pool');

router.post("/", async(req,res) => {
  try{
      const { description, date_acquired, cost_amount } = req.body;
      const newCost = await pool.query("INSERT INTO cost (description, date_acquired, cost_amount) VALUES ($1, $2, $3) RETURNING *", [description, date_acquired, cost_amount]);
      res.json(newCost.rows[0]);
  }catch(err){
      console.error(err.message)
  }
});

router.get("/:id", async(req,res) => {
  try {
    const{id} = req.params;
    const cost= await pool.query("SELECT * FROM cost WHERE expense_id = $1",[id]);
    res.json(cost.rows[0])
  } catch (error) {
    console.error(error.message);
  }
});

router.get("/", async(req, res) => {
    try {
      const allCosts = await pool.query("SELECT * FROM cost");
      res.json(allCosts.rows);
    } catch (error) {
      console.error(error.message);
    }
  });
  

router.put("/:id", async (req,res) => {
  try {
    const {id} = req.params;
    const {description, date_acquired, cost_amount} = req.body;
    const updateCost = await pool.query("UPDATE cost SET description = $1, date_acquired = $2, cost_amount = $3 WHERE expense_id = $4", [description, date_acquired, cost_amount, id]);
    res.json("Cost was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCost = await pool.query("DELETE FROM cost WHERE expense_id = $1", [id]);
    res.json("Cost was deleted!");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;

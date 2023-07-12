const express = require('express');
const router = express.Router();
const pool = require('../db/pool');

router.post("/", async(req,res) => {
  try{
      const { chx_name, hen_or_rooster, age, date_acquired, comments } = req.body;
      const newFlock = await pool.query("INSERT INTO flock (chx_name, hen_or_rooster, age, date_acquired, comments) VALUES ($1, $2, $3, $4, $5) RETURNING *", [chx_name, hen_or_rooster, age, date_acquired, comments]);
      res.json(newFlock.rows[0]);
  }catch(err){
      console.error(err.message)
  }
});

router.get("/:id", async(req,res) => {
  try {
    const {id} = req.params;
    const flock= await pool.query("SELECT * FROM flock WHERE flock_id = $1",[id]);
    res.json(flock.rows[0])
  } catch (error) {
    console.error(error.message);
  }
});

router.get("/", async(req,res)=>{
    try {
        const allFlock= await pool.query("SELECT * FROM flock")
        res.json(allFlock.rows)
    } catch (error) {
      console.error(error.message);  
    }
})

router.put("/:id", async (req,res) => {
  try {
    const {id} = req.params;
    const {chx_name, hen_or_rooster, age, date_acquired, comments} = req.body;
    const updateFlock = await pool.query("UPDATE flock SET chx_name = $1, hen_or_rooster = $2, age = $3, date_acquired = $4, comments = $5 WHERE flock_id = $6", [chx_name, hen_or_rooster, age, date_acquired, comments, id]);
    res.json("Flock was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteFlock = await pool.query("DELETE FROM flock WHERE flock_id = $1", [id]);
    res.json("Flock was deleted!");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;

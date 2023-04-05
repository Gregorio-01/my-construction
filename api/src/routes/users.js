const axios = require("axios")
const { Router } = require('express');
const { Users } = require("../db");

const { createUser, getAllUsers } = require("../controllers/controllersUsers");

const router = Router();

router.get("/allUsers", async (req, res) => {
    try {
      const allUsers = await getAllUsers();
      res.status(200).send(allUsers);
    } catch (e) {
      res.status(400).send(e.message);
    }
  });

router.post("/", async (req,res) => {
    try{
        let {name, lastname, sales} = req.body
        const newUser = await createUser(name, lastname, sales)
        res.status(200).send(newUser)
    }catch(e){
        res.status(404).send(e.message)
    }
})

module.exports = router;
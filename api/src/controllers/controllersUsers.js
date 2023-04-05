const  axios  = require("axios");
require("dotenv").config();
const { Users } = require("../db");

async function getAllUsers() {
    let allUsers = await Users.findAll();
    return allUsers;
  }

async function createUser(name, lastname, sales) {
    if (!name || !lastname || !sales) {
      return "misign data";
    }
    let newUser = await Users.create({
      name,
      lastname,
      sales,
    });
  
    return newUser;
  }

  module.exports = {
    getAllUsers,
    createUser
  }
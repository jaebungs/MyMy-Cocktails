const express = require('express');
const User = require('../models/user');

const getMyBar = async (req, res) => {

};

const addToMyBar = async (req, res) => {
  const {id, _id, name, ingredients, instruction, garnish} = req.body;
  try { 
    const user = await User.findByIdAndUpdate(
      id,
      { $addToSet: { 'bar': {_id, name, ingredients, instruction, garnish}} },
      {new: true},
      (err, result) => {
        if (err) {
          res.status(400).json({message: 'Adding to My Bar failed.'});
          console.log(err);
        }
        if (result) {
          res.status(200).json({...result});
        }
      }
    );
  } catch (error) {
    res.status(500).json({message: 'Adding to mybar Error.'});
  }
};

module.exports = {getMyBar, addToMyBar};

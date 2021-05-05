const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const dotenv = require('dotenv');

dotenv.config();

const signin = async (req, res) => {
  const {email, password} = req.body;

  try {
    const existingUser = await User.findOne({email});
    
    if (!existingUser) return res.status(404).json({message: `User doesn't exist.`});

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) return res.status(404).json({message: 'Wrong password.'});

    const token = jwt.sign(
      {email: existingUser.email, id: existingUser._id},
      process.env.JWT_SECRET,
      {expiresIn: process.env.JWT_EXPIRES_IN}
    );
    res.status(200).json({result: existingUser, token});
  } catch (error) {
    res.status(500).json({message: 'Something went wrong on the server side.'});
  }
};

const signup = async (req, res) => {
  const {firstName, lastName, email, password, confirmPassword} = req.body;

  try {
    const existingUser = await User.findOne({email});
    const oneLetterUppperFirstName = firstName.toLowerCase().charAt(0).toUpperCase() + firstName.slice(1); //Make first letter capital
    const oneLetterUppperLastName = lastName.toLowerCase().charAt(0).toUpperCase() + lastName.slice(1);
  
    if (existingUser) return res.status(400).json({message: 'User already exists'});
    if (password !== confirmPassword) return res.status(400).json({message: 'Password does not match.'});

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${oneLetterUppperFirstName} ${oneLetterUppperLastName}`,
      firstName: oneLetterUppperFirstName,
      lastName: oneLetterUppperLastName,
      bar: []
    });

    const token = jwt.sign({email: result.email, id: result._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN,});
    res.status(200).json({result, token});
  } catch (error) {
    res.status(500).json({message: 'Something went wrong on the server side.'});
  }
};

module.exports = {signin, signup};

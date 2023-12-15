const user = require("../model/user");
const jwt=require('jsonwebtoken');


const createToken=(_id)=>{

    return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})

};

const loginUser = async (req, res) => {
  
    const {email,password}=req.body;

    try {
        const currUser = await user.login(email, password);
    

        const token=createToken(currUser._id);
        res.status(200).json({ email, token });
      } catch (error) {
        res.status(400).json({ err: error.message });
      }


};

const createUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUser = await user.signup(email, password);

    const token=createToken(newUser._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
 
};

module.exports = { loginUser, createUser };

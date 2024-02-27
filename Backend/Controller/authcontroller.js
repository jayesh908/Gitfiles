const User = require("../Model/userModel");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const authcontroller = {
  register: async (req, res) => {
    const { name, email, password, phone, address, question } = req.body;

    if (!(name && email && password && phone && address)) {
      return res.send({ error: "everything is required" });
    }

    const existed = await User.findOne({ name, email });
    if (existed) {
      res.status(400).json({
        message: "Already Existed",
      });
    } else {
      const encrypt = await bcrypt.hash(password, 10);
      const users = await User.create({
        name: name,
        email: email,
        password: encrypt,
        phone: phone,
        address: address,
        question: question,
      });

      const data = await users.save();
      res.status(200).json({
        success: true,
        data: data,
      });
    }
  },

  setlog: async (req, res) => {
    try {
      const { email, password } = req.body;
      const existed = await User.findOne({ email });
      if (existed) {
        const decrypt = await bcrypt.compare(password, existed.password);
        if (decrypt) {
          const token =  JWT.sign(
            { _id: existed._id },
            process.env.JWT_SECRET,
            {
              expiresIn: "7d",
            }
          );
          res.status(200).send({
            success: true,
            message: "Login successfull",
            user: {
              name: existed.name,
              email: existed.email,
              phone: existed.phone,
              address: existed.address,
              role:existed.role
            },
            token,
          });
          console.log("Login successful");
          console.log(decrypt);
        }
        else{
          res.status(400).json({
            message:"invalid credentials"
          })
        }
      }
      else{
        res.status(452).json({
          message:"invalid credentials"
        })
      }
      
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: false,
        message: "error in login",
      });
    }
  },

  getdata: async (req, res) => {
    res.send("protected routes");
  },

  //fForgot PAssword
  forget: async (req, res) => {
    try {
      const { email, question, newpassword } = req.body;
      if (!email) {
        res.status(400).send({
          message: "email is required",
        });
      }
      if (!question) {
        res.status(400).send({
          message: "Question is required",
        });
      }
      if (!newpassword) {
        res.status(400).send({
          message: " New Password is required",
        });
      }

      const find = await User.findOne({ email, question });
      if (!find) {
        res.status(405).send({
          success: false,
          message: "Invalid Credentials",
        });
      }
      const hashed = await bcrypt.hash(newpassword, 10);
      await User.findByIdAndUpdate(find._id, { password: hashed });
      res.status(200).json({
        success: true,
        message: "password reset success fully",
      });
      console.log("password changed successfully")
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "something went Wrong",
        error,
      });
    }
  },
};

module.exports = authcontroller;

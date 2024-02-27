const jWT = require("jsonwebtoken");
const User = require("../Model/userModel");

//protectd routes token base

const requiresign = {
  getty: async (req, res, next) => {
    try {
      const decode = jWT.verify(
        req.headers.authorization,
        process.env.JWT_SECRET
      );
      req.user = decode;
      next();
    } catch (error) {
      console.log(error);
    }
  },

  adminaccess: async (req, res, next) => {
    try {
      const user = await User.findById(req.user._id);
      if (user.role !== 1) {
        return res.status(401).send({
          success: false,
          message: "unauthorized access",
        });
      } else {
        next();
      }
    } catch (error) {}
  },
};
module.exports = requiresign;

const authcontroller = require("../Controller/authcontroller");
const requiresign = require("../Middleware/authmiddleware");

const route = require("express").Router();

//Creating-User
route.post("/setuser", authcontroller.register);
//Login
route.post("/setlogin", authcontroller.setlog);
//Forget-PAssword
route.post("/forget", authcontroller.forget);

route.get(
  "/getdata",
  requiresign.getty,
  requiresign.adminaccess,
  authcontroller.getdata
);
//protected route for user
route.get("/auth", requiresign.getty, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});
//protected route fro admin
route.get("/admin", requiresign.getty, requiresign.adminaccess,(req, res) => {
  res.status(200).send({
    ok: true,
  });
});

module.exports = route;

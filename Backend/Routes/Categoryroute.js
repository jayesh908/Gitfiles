const Categorycontroller = require("../Controller/CategoryController")
const requiresign = require("../Middleware/authmiddleware")
const categoryroute = require("express").Router()

categoryroute.post("/category",Categorycontroller.Categories)
categoryroute.post("/update/:id",requiresign.getty,requiresign.adminaccess,Categorycontroller.update)
categoryroute.get("/get",Categorycontroller.getdata)
categoryroute.get("/single/:slug",Categorycontroller.single)
categoryroute.delete("/delete/:slug",Categorycontroller.deletecategory)

module.exports = categoryroute
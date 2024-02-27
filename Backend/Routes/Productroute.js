const formidable = require("express-formidable")
const requiresign = require("../Middleware/authmiddleware")
const route = require("express").Router()
const productcontroller = require("../Controller/Productcontroller")

route.post("/setproduct",requiresign.getty,requiresign.adminaccess,formidable(),productcontroller.product)
route.get("/getproduct",productcontroller.getproducts)
route.get("/singleproduct/:id",productcontroller.singleproduct)
route.get("/photo/:pid",productcontroller.getphoto)
route.delete("/delete/:id",productcontroller.deleteproduct)
route.post("/update/:id",requiresign.getty,requiresign.adminaccess,formidable(),productcontroller.updating)

module.exports = route  
const Product = require("../Model/Products");
const fs = require("fs");
const { default: slugify } = require("slugify");
const slug = require("slugify");
const productcontroller = {
  product: async (req, res) => {
    try {
      const { name, slug, description, price, category, quantity, shipping } =
        req.fields;
      const { photo } = req.files;
      switch (true) {
        case !name:
          return res.status(500).json({
            error: "Name is required",
          });
        case !slug:
          return res.status(500).json({
            error: "slug is required",
          });
        case !description:
          return res.status(500).json({
            error: "description is required",
          });
        case !category:
          return res.status(500).json({
            error: "category is required",
          });
        case !quantity:
          return res.status(500).json({
            error: "quantity is required",
          });
        case !photo && photo.size > 1000000:
          return res.status(500).json({
            error: "photo is required",
          });
      }
      const products = await Product.create({
        ...req.fields,
        slug: slugify(name),
      });
      if (photo) {
        products.photo.data = fs.readFileSync(photo.path);
        products.photo.contentType = photo.type;
      }

      const saved = await products.save();
      res.status(200).json({
        message: "product added successfully",
        saved,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "error in making product",
        error: error,
      });
    }
  },

  //All Products
  getproducts: async (req, res) => {
    try {
      const allproducts = await Product.find()
        .populate("category")
        .select("-photo")
        .limit(12)
        .sort({ createdAt: -1 });
      res.status(200).json({
        allproducts: allproducts,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "error occur to get data",
        error: error,
      });
    }
  },

  //single Products
  singleproduct: async (req, res) => {
    try {
      const { id } = req.params;
      const single = await Product.findOne({ id })
        .select("-photo")
        .populate("category");
      res.status(200).json({
        message: "single data",
        data: single,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "error occured in single data",
      });
    }
  },

  //Get Photos
  getphoto: async (req, res) => {
    try {
      const { pid } = req.params;
      const findphoto = await Product.findOne({ pid }).select("photo");

      if (!findphoto) {
        return res.status(404).json({
          message: "Photo not found",
        });
      }

      if (findphoto.photo.data) {
        res.set("Content-type", findphoto.photo.contentType);
        return res.status(200).send(findphoto.photo.data);
      } else {
        return res.status(404).json({
          message: "Photo not found",
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Error occurred while fetching the photo",
        error: error.message,
      });
    }
  },

  //Delete Product
  deleteproduct: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Product.FindByIdAndDelete({ id }).select("-photo");
      res.status(200).json({
        message: "data ",
        deleted,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error,
      });
    }
  },

  //Update the Data
  updating: async (req, res) => {
    try {
      const { name, slug, description, price, category, quantity, shipping } =
        req.fields;
      const { photo } = req.files;
      switch (true) {
        case !name:
          return res.status(500).json({
            error: "Name is required",
          });
        case !slug:
          return res.status(500).json({
            error: "slug is required",
          });
        case !description:
          return res.status(500).json({
            error: "description is required",
          });
        case !category:
          return res.status(500).json({
            error: "category is required",
          });
        case !quantity:
          return res.status(500).json({
            error: "quantity is required",
          });
        case !photo && photo.size > 1000000:
          return res.status(500).json({
            error: "photo is required",
          });
      }
      const products = await Product.findByIdAndUpdate(
        req.params.pid,
        { ...req.fields, slug: slugify(name) },
        { new: true }
      );
      if (photo) {
        products.photo.data = fs.readFileSync(photo.path);
        products.photo.contentType = photo.type;
      }

      const saved = await products.save();
      res.status(200).json({
        message: "product updated successfully",
        saved,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "error in updating product",
        error: error,
      });
    }
  },
};

module.exports = productcontroller;

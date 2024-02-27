const Category = require("../Model/CategoryModel");
const slugify = require("slugify");
const Categorycontroller = {
  Categories: async (req, res) => {
    try {
      const { name } = req.body;
      if (!name) {
        return res.status(401).json({
          message: "Name is Required",
        });
      }
      const existing = await Category.findOne({ name });
      if (existing) {
        return res.status(200).json({
          success: true,
          message: "already exist",
        });
      }
      const newcategory = await Category.create({
        name: name,
        slug: slugify(name),
      });
      const saved = newcategory.save();
      res.status(200).json({
        message: "data added successfully",
        saved,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "error in category",
      });
    }
  },

  //updatecategory

  update: async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    try {
      const find = await Category.findByIdAndUpdate(
        id,
        { name, slug: slugify(name) },
        { new: true }
      );
      res.status(200).json({
        success: true,
        message: "category updated successfully",
        Category,
      });
    } catch (error) {
      console.log(error);
    }
  },

  //all categories
  getdata: async (req, res) => {
    try {
      const alldata = await Category.find();
      res.status(200).json({
        success: true,
        data: alldata,
      });
    } catch (error) {
      console.log(error);
    }
  },

  //Single Category
  single: async (req, res) => {
    try {
      const { slug } = req.params;
      const single = await Category.findOne({ slug });
      res.status(200).json({
        message: "single data",
        data: single,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "getting error in single category",
        error: error,
      });
    }
  },

  //delete category

  deletecategory: async (req, res) => {
    const { slug } = req.params;
    const deleted = await Category.deleteOne({ slug });
    res.status(200).json({
      message: "data deleted",
      deleted,
    });
  },
};
module.exports = Categorycontroller;

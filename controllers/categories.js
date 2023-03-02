const fs = require("fs");
const filePath = "../datas/categories.json";

//GetAll
const getAllCategories = (req, res);
//Create
const createCategory = (req, res) => {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    console.log("Con", content);
    const data = JSON.parse(content);
    console.log("Data", data.categories);
    const newData = { ...req.body };
    data.categories.push(newData);
    fs.writeFileSync("categories.json", JSON.stringify(data));
    res.status(201).json({ message: "ty.", data: newData });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
//Get
const getCategory = (req, res) => {
  try {
    const categoriesData = fs.readFileSync(filePath, "utf-8");
    console.log("CC", categoriesData);
    const data = JSON.parse(categoriesData);
    console.log("DD", data);
    res.status(200).json({ message: "success", data });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
//Update
const updateCategory = (req, res);
//Delete
const deleteCategory = (req, res);

module.exports = {
  getAllCategories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};

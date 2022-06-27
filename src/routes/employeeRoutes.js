const express = require("express");
const Employee = require("../models/employee");
const router = new express.Router();

router.get("/employees", async (req, res) => {
  Employee.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

router.get("/employees/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).send({ error: "Sorry employee not found" });
    }
    res.send(employee);
  } catch (err) {
    res.status(500).send(e);
  }
});

router.post("/employees", async (req, res) => {
  console.log(req.body);
  const employee = new Employee(req.body);
  try {
    await employee.save();
    res.status(201).send(employee);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.put("/employees/:id", async (req, res) => {
  console.log(req.body);
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(employee);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/employees/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).send({ error: "Sorry employee not found" });
    }
    employee.remove();
    res.status(200).send({ message: "Deleted Successfully" });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;

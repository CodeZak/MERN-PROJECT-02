const express = require("express");
const Employee = require("../Models/employee");
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database

// This help convert the id from string to ObjectId for the _id.
const { ObjectId } = require("mongodb");

// This section will help you get a list of all the records.
recordRoutes.get("/record", async (req, res) => {
    try {
        const employees = await Employee.find({});
        res.send(employees);
    } catch (e) {
        res.status(500).send("hi");
    }
});

// This section will help you get a single record by id
recordRoutes.get("/record/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const employee = await Employee.findById(id);
        if (!employee) {
            return res.status(404).send("Id not found");
        }
        res.send(employee);
    } catch (error) {
        res.status(500).send();
    }
});

// This section will help you create a new record.
recordRoutes.post("/record/add", async (req, response) => {
    const employee = new Employee(req.body);
    try {
        employee.save();
        response.status(201).send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
});

// This section will help you update a record by id.
recordRoutes.patch("/update/:id", async (req, response) => {
    const id = req.params.id;
    try {
        const employee = await Employee.findByIdAndUpdate(id, req.body);
        employee.save();
        response.status(201).send();
    } catch (error) {
        res.status(400).send(error);
    }
});

// This section will help you delete a record

recordRoutes.delete("/:id", async (req, response) => {
    const id = req.params.id;
    try {
        await Employee.findByIdAndDelete(id);
        response.status(201).send();
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = recordRoutes;

import express from "express";

import db from "./data.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    console.log("test");
    res.status(200).json({ test: "test" });
});

app.get("/api/products", (req, res) => {
    const products = db.products;
    res.status(200).json({ products });
});
app.get("/api/products/:id", (req, res) => {
    const products = db.products;
    const id = req.params.id;
    const product = products.find((item) => item.id === id);
    res.status(200).json({ product });
});

app.get("/api/customers", (req, res) => {
    const customers = db.customers;
    res.status(200).json({ customers });
});
app.get("/api/customers/:id", (req, res) => {
    const customers = db.customers;
    const { id } = req.params;
    const customer = customers.find((item) => item.id === id);
    res.status(200).json({ customer });
});

const PORT = 5000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
process.on("unhandledRejection", (error) => {
    console.log(`Error: ${error.message}`);
    server.close(() => process.exit(1));
});

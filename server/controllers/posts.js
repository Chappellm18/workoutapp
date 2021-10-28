// set up subpipeline //
// Requires
const express = require("express");
const model = require('../models/posts')
const app = express.Router();

app
    // Getters
    .get('/', (req, res, next) => { res.send(model.GetAll()); })
    .get('/search', (req, res, next) => { res.send(model.Search(req.query.id)); })
    .get('/:id', (req, res, next) => { res.send(model.Get(req.params.id)); })
    // Posts
    .post("/", (req, res, next) => { res.status(201).send(model.Add(req.body)); })

module.exports = app;

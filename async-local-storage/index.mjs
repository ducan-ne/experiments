import http from 'node:http';
import express from 'express'
import {asyncLocalStorage, url} from "./hooks.mjs";

const app = express()


app.use((req, res, next) => {
    asyncLocalStorage.run({headers: req.headers, url: req.url}, () => {
        next()
    });
})

app.get('/url', (req, res) => {
    const currentUrl = url()
    res.json({currentUrl})
})

app.listen(8080);

import { Router } from "express";

const api = Router()

api.get('/', function (req, res){
    res.send('api')
})

export default api;
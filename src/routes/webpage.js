import { Router } from "express";

const webpage = Router()

webpage.get('/', function (req, res){
    res.send('<h1>Welcome</h1>')
})

export default webpage;
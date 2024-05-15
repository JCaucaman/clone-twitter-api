import { Router } from "express";

const api = Router()

// #########################
// ######### USER ##########
// #########################

// Route Search Users
api.get('/user', function (req, res){
    res.send('api - users get')
})
// Route Search User ID
api.get('/user/:id', function (req, res){
    res.send('api - users get ID')
})

// Route Create User
api.post('/user', function (req, res){
    res.send('api - users post (create)')
})

// Route Login User
api.post('/user/login', function (req, res){
    res.send('api - users post (login)')
})

// Route Update Data User
api.put('/user/:id', function (req, res){
    res.send('api - users put')
})

// Route Delete User
api.delete('/user/:id', function (req, res){
    res.send('api - users delete')
})

// #########################
// ######### POST ##########
// #########################

api.get('/post', function (req, res){
    res.send('api - posts get')
})

api.get('/post/:id', function (req, res){
    res.send('api - get ID')
})

api.post('/post', function (req, res){
    res.send('api - posts post')
})

api.put('/post/:id', function (req, res){
    res.send('api - posts put')
})

api.delete('/post/:id', function (req, res){
    res.send('api - posts delete')
})

// #########################
// ######## COMMENT ########
// #########################

// Route Search Comment
api.get('/comment', function (req, res){
    res.send('api - comments get')
})

// Route Search Comment ID
api.get('/comment/:id', function (req, res){
    res.send('api - comments get ID')
})

// Route Create Comment
api.post('/comment', function (req, res){
    res.send('api - comments post')
})

// Route Upgrate Comment
api.put('/comment/:id', function (req, res){
    res.send('api - comments put')
})

// Route Delete Comment
api.delete('/comment/:id', function (req, res){
    res.send('api - comments delete')
})

export default api;
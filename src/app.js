import bodyParser from 'body-parser';
import express from 'express';
import fs from 'fs';

const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.post('/',(req,res,next)=>{
    // console.log(req.body.firstname)
    // console.log(req.body.lastname)
    // console.log(req.body.email)
    // console.log(req.body.address)
    // console.log(req.body.username)
    // console.log(req.body.password)
    const userData = {
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        email:req.body.email,
        address:req.body.address,
        username: req.body.username,
        password:req.body.password
    }
    fs.writeFile('./userData.txt', `${userData.firstName}, ${userData.lastName}, ${userData.email}, ${userData.address}, ${userData.username}, ${userData.password}`,(err) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log('Wrote the file')
    })
    res.end();
})

app.use((req,res,next) => {
    return res.send(`<form method="POST" class='my-form'>
    <label>first name</label>
    <input type="text" name="firstname">
    <label>last name</label>
    <input type="text" name="lastname">
    <label>email</label>
    <input type="text" name="email">
    <label>address</label>
    <input type="text" name="address">
    <label>username</label>
    <input type="text" name="username">
    <label>password</label>
    <input type="password" name="password">
    <button type="submit">Create User</button></form>`)
})

app.listen(3030)
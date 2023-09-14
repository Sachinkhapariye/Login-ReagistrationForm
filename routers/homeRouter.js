const express = require('express');
const Router = express.Router();
const userSchema = require('../models/userSchema');


Router.get('/',(req,res)=>{
    res.render('register',{title:'Fill Form',password:'',email:''})
})

Router.get('/login',(req,res)=>{
    res.render('login');
})


Router.post('/register',async(req,res)=>{
    try {
        const {
            name,
            number,
            email,
            password,
            cpassword
        } = req.body;

        if(password === cpassword){
             const userData = new userSchema({
                name,
                number,
                email,
                password,
             })
             try {
                const savedUser = await userData.save();
                res.render('login'); 
                console.log('done!!')
            } catch (err) {
                console.error(err);
            }

            const existingUser = await userSchema.findOne({ email });
            if (existingUser) {
                return res.render('register', {title: '',password: '',email: 'Email is already registd',});
            }else{
                console.log("err")
            }
        
        }else{
        res.render('register',{title:'',password:'password is not match',email:''})
        }

    } catch (error) {
    res.render('register',{title:'Error in Code',password:'',email:''})
    }
})

Router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userSchema.findOne({ email });

        if (user) {
            if (user.password === password) {
                res.render('dashboard',{name:user.name}); 
                //res.redirect('/dashboard');
            } else {
               // res.render('login', { error: 'Invalid email or password' });
                res.render('register',{title:'Invalid email or password',password:'',email:''})
            }
        } else {
            // User not found
           // res.render('login', { error: 'Invalid email or password' });
            res.render('register',{title:'Invalid email or password',password:'',email:''})
        }
    } catch (error) {
        console.error(error);
       // res.render('login', { error: 'An error occurred during login' });
        res.render('register',{title:'An error occurred during login',password:'',email:''})

    }
});


module.exports = Router;

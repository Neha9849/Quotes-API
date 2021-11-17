import express from 'express';
import userRoutes from './routes/quotes.js'
const app = express();
//middlewares
app.use(express.json())
app.use('/quotes',userRoutes);
const PORT = process.env.PORT || 5000;
//routes----------------------------------//
//@GET     /users       finds all users
//@POST    /users       creates user
//@GET     /users/:id   user detail
//@DELETE  /users/:id   deletes user 
//@PUT     /users/:id   updates users

app.get('/',(req,res)=>{
    res.send('heya')
})
app.listen(PORT,()=>{
    console.log('server running..')
})
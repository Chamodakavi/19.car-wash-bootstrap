import express from "express"
import mysql from "mysql"
import cors from "cors"


const app = express()
app.use(express.json())
app.use(cors());

//create connection with db
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'carwash'
})

//create connection with back end
app.listen(8800, ()=>{
    console.log("connected to the back end")
    
})

//see the connection
app.get('/',(req,res)=>{
    res.json('connected to the b-end in browser')
})

//get contactus details from db to browser
app.get('/contactus', (req,res)=>{
    const q = 'SELECT * FROM contactus'
    db.query(q,(err,data)=>{
        if(err) {
            console.log('request error in books :'+err)
            return res.json('request error in books :'+err)
        }

        return res.json(data)
    })
})

//put details into contactus table
app.post('/contactus',(req,res)=>{
    const q = 'INSERT INTO contactus(`name`, `email`, `message`) VALUES (?)'
    const values = [
        req.body.name,
        req.body.email,
        req.body.message
    ]

    db.query(q,[values],(err,data)=>{
        if (err) return res.send(err)
            return res.json(data)
    })
})

//get booking details from booking table
app.get('/booking',(req,res)=>{
    const q = 'SELECT * FROM booking'
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
            return res.json(data)
    })
})

//add booking details to booking table
app.post('/booking',(req,res)=>{
    const q = 'INSERT INTO booking(`fname`,`lname`,`email`,`mobileno`,`vtype`,`vnumber`,`services`,`date`,`time`) VALUES (?)'
    const values = [
        req.body.fname,
        req.body.lname,
        req.body.email,
        req.body.mobileno,
        req.body.vtype,
        req.body.vnumber,
        req.body.services,
        req.body.date,
        req.body.time
    ]
    db.query(q,[values],(err,data)=>{
        if (err) return res.json(err)
            return res.json(data)
    })
})
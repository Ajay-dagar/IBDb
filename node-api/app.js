const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const logger = require('morgan');
const app = express();
const cors = require('cors');

app.use(cors());
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Import Routes
const booksRouter = require('./routes/books');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
//use routes
app.use('/api/users', usersRouter);
app.use('/api/books', booksRouter);
app.use('/api/auth', authRouter);

/*app.use(cors({
    origin: '*',
    methods: ['GET', 'PUT', 'DELETE', 'PATCH', 'POST'],
    allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
})); */


module.exports = app;













/*
const f1 = require('express');
const app = f1();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const cors = require('cors');
app.use(cors());


app.post("/books",function(req,res)
{
  
    var fromnodejstoang ={};
    fromnodejstoang.result=[];
    console.log("did we read parameter" + req.body.id);
    


var params=[]; // filling of question marks
var sql="select * from books";


var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database:"ibdb"
  });

if(req.body.id != 0)
{
    sql +=" where cat_id = ?";
    params.push(req.body.id);

}

con.query(sql,params,function(err,sel){
    if(err)
    {
        console.log(err);

    }
    else
    {
        fromnodejstoang.result=sel;
        console.log("outut is" +JSON.stringify(fromnodejstoang) );
        res.send(JSON.stringify(fromnodejstoang));
    }  


       con.destroy();   
});

});



//------------------------------------------
app.listen(3001, () => {
    console.log('App running at 3001')
}) */
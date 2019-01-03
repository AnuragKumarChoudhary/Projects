const mysql = require('mysql');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.options('*', cors());
app.use(bodyparser.json({limit: '50mb'}));



var mysqlConnection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
		user: 'root',
		password: '',
        database: 'goal_salon'
    });

mysqlConnection.connect((err) =>{
        if (!err)
            console.log('DB Connection Successful');
        else
            console.log('DB Connection Failed :' + JSON.stringify(err,undefined,2));

});

app.listen(3000,()=> console.log('Express Server is running at port no : 30000'));
app.get('/user',(req,res)=> {
    mysqlConnection.query('SELECT * from customer_info',(err,result,fields)=> {
        if (!err)
            //console.log(rows);
            res.send(result);
        else    
            console.log(err);
    })
});

app.post('/customer-registration',(req, res)=> {
	customer_id = req.body.customer_id;
	name = req.body.name;
	email = req.body.email;
	contact = req.body.phone;
    DOB = req.body.date_of_birth;
	gender = req.body.gender;
    wedding_date = req.body.wedding_date;
    child_DOB = req.body.child_birth_date;
    image = req.body.image;
	
	var sqlQuery = "INSERT INTO customer_info values('"+customer_id+"','"+name+"','"+email+"','"+contact+"','"+DOB+"','"+gender+"','"+wedding_date+"','"+child_DOB+"','"+image+"')";
	mysqlConnection.query(sqlQuery,(err,rows,fields)=> {
        if (!err)
            //console.log(rows);
            res.send(rows);
        else    
            console.log(err);
    })
	
});

app.get('/user/:customer_id',(req,res)=> {
    mysqlConnection.query('SELECT * from customer_info where customer_id = ?',[req.params.customer_id],(err,result,fields)=> {
        if (!err)
            //console.log(rows);
            res.send(result);
        else    
            console.log(err);
    })
});

app.get('/men/service', (req,res)=>{
	mysqlConnection.query('select * from goal_saloon_men_services', (err, result, fields)=> {
		if(!err)
			res.send(result);
		else
			console.log(err)
	})
});

app.get('/women/service', (req,res)=>{
	mysqlConnection.query('select * from goal_saloon_women_services', (err, result, fields)=> {
		if(!err)
			res.send(result);
		else
			console.log(err)
	})
});


app.post('/booking',(req, res)=> {
	booking_id = req.body.booking_id;
	customer_id = req.body.customer_id;
	services = req.body.serviceName;
	date = req.body.date;
    cost = req.body.charges;
	
	var sqlQuery = "INSERT INTO GOAL_SALON_BOOKING values('"+booking_id+"','"+customer_id+"','"+services+"','"+cost+"', '"+date+"')";
	mysqlConnection.query(sqlQuery,(err,rows,fields)=> {
        if (!err)
            //console.log(rows);
            res.send(rows);
        else    
            console.log(err);
    })
	
});


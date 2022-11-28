const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const Register=require("./registerSchema.js")
const port=4000

app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())

app.use(cors())

mongoose.connect("mongodb+srv://Ramani:7207432015@cluster0.mu0nxgo.mongodb.net/firstdb?retryWrites=true&w=majority")
	.then(()=>{
		console.log("Connection established")
	})
	.catch((err)=>{
		console.log(err)
	})

app.get("/",(req,res)=>{
	res.send("dummy root route")
})
app.post("/register",(req,res)=>{
	//const {email,passcode}=req.body;
	const email="user@gmail.com",passcode="2521"
	const newFrontendUser=new Register({
		username:email,
		password:passcode
	})
	newFrontendUser.save()
})
app.listen(port,()=>console.log("Server is running on port",port))

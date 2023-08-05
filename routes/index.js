const app = require("express").Router()
const apiRoutes = require("./api")

app.use("/api",apiRoutes)

app.use("*",function(req,res){
    res.status(404).json({"message":"Wrong route... Please test all apir routes only"})

})



module.exports = app;

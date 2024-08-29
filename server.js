
const app = require('./app');

var port = process.env.port || 3000;
app.listen(port,()=>{
    console.log("App listening to: "+port)
})
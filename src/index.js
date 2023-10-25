const express =require('express');
const bodyParser=require('body-parser')
const app=express();
const {PORT}=require('./config/serverConfig');
const apiRoutes=require('./routes/index');
const db =require('./models/index');



const setupAndStartServer =()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
    app.listen(3002,()=>{
      console.log(`Server listening at port ${PORT}`);
      if(process.env.DB_SYNC){
        db.Sequelize.sync({alert:true});
      }
    })
}
setupAndStartServer();
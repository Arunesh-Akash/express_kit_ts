import express, {Application,Request,Response} from "express";
import "dotenv/config";
import cors from "cors"; 
const app:Application = express();
const Port= process.env.PORT || 3500;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get('/',(req:Request,res:Response):any=>{

    return res.send("It's working 🙌");
});


app.listen(Port,()=>{
    console.log(`Server is running on ${Port}`);
})
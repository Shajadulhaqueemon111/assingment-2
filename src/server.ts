import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";
import { error } from "console";




try{
    async function main() {
        await mongoose.connect(process.env.database_url as string);
    }
    
    app.listen(config.port, () => {
        console.log(`Example app listening on port ${config.port}`)
      })
      
}catch{
    console.log(error)
}

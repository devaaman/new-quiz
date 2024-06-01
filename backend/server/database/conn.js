import mongoose  from "mongoose";
// export default async function connect(){
//    await mongoose.connect(process.env.ATLAS_URI)
//    console.log("Database Connected");
   
// }

export default async function connect() {
   try {
     await mongoose.connect(process.env.ATLAS_URI);
     console.log("Database Connected");
   } catch (error) {
     console.error("Database Connection Error:", error);
   }
 }
 
import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Connected Successfully!`);
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1);
  }
};


// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// export const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       dbName: "horizon_user_details", // Ensuring the correct database is used
//     });

//     console.log("✅ MongoDB Connected Successfully!");

//     // Ensure database and host information is correctly fetched
//     const db = mongoose.connection.useDb("horizon_user_details");
//     const host = mongoose.connection.client.s.url || "Unknown Host"; // Correct way to fetch MongoDB host

//     console.log(`📂 Database Name: ${db.name}`);
//     console.log(`🌍 MongoDB Host: ${host}`);

//   } catch (error) {
//     console.error("❌ MongoDB Connection Failed:", error.message);
//     process.exit(1);
//   }
// };

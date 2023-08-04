import mongoose from 'mongoose';
 
export const connectDB = async () => {
    try {
      await mongoose.connect("mongodb://localhost:27018/merndb");
      console.log("<<< MongoDB is connected >>>");
    } catch (error) {
      console.log('error {}', error);
    }
  };

  // https://www.youtube.com/watch?v=NmkY4JgS21A&ab_channel=FaztCode
const mongoose = require( "mongoose");

const connectToMongo = async () => {
   try {
      if (mongoose.connection.readyState === 1) {
         console.log('already connected 🎖️');
         return { isConnected: true, message: "OK" };
      }
      await mongoose.connect(process.env.MONGO_URI)
      console.log('🎖️ connected to mongo');
      return { isConnected: true, message: "OK" };
   } catch (error) {
      console.log('📵 error connect to mongo', error);
      return { isConnected: false, message: "📵 Network connection error" }
   }
}

module.exports = { connectToMongo };


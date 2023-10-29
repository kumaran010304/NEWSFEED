// import mongoose from 'mongoose'

// mongoose
//   .connect('mongodb+srv://dhyaanesh:dhyan48@cluster0.tuetphp.mongodb.net/recommendation')
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('Failed to connect to MongoDB:', err));

// const newsSchema = new mongoose.Schema({
//   Title: String,
//   count: Number
// });

// const data = mongoose.model('data', newsSchema);

// const addData = async (srcKey) => {
//   try {
//     const existingData = await data.findOne({ Title: srcKey });
//     if (existingData) {
//       existingData.count += 1;
//       await existingData.save();
//     } else {
//       await data.create({
//         Title: srcKey,
//         count: 1
//       });
//     }
//     console.log('Data added successfully');
//   } catch (err) {
//     console.error('Failed to add data:', err);
//   }
// };


// const recommended = async () => {
//     try {
//       const result = await data.findOne().sort('-count').select('Title');
  
//       if (result) {
//          return result.Title ;
//       } else {
//         return null;
//       }
//     } catch (err) {
//       console.error('Failed to fetch recommended data:', err);
//       return null;
//     }
//   };



import express from 'express';
import { connect } from 'mongoose';
import { Schema, model } from 'mongoose';

const app = express();
const port = 3000;

// Connect to MongoDB
connect('mongodb+srv://dhyaanesh:dhyan48@cluster0.tuetphp.mongodb.net/recommendation')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Define your mongoose schema and models
const newsSchema = new Schema({
  Title: String,
  count: Number
});

const data = model('datas', newsSchema);
app.use(express.static('public'));

const addData = async (srcKey) => {
  try {
    const existingData = await data.findOne({ Title: srcKey });
    if (existingData) {
      existingData.count += 1;
      await existingData.save();
    } else {
      await data.create({
        Title: srcKey,
        count: 1
      });
    }
    console.log('Data added successfully');
  } catch (err) {
    console.error('Failed to add data:', err);
  }
};

const recommended = async () => {
  try {
    const result = await data.findOne().sort('-count').select('Title');

    if (result) {
      return result.Title;
    } else {
      return null;
    }
  } catch (err) {
    console.error('Failed to fetch recommended data:', err);
    return null;
  }
};

// Define your API endpoints
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

// ...

// Define your API endpoints

app.get('/addData/:srcKey', async (req, res) => {
  const srcKey = req.params.srcKey;

  try {
    const existingData = await data.findOne({ Title: srcKey });

    if (existingData) {
      existingData.count += 1;
      await existingData.save();
      console.log('Data updated successfully');
    } else {
      await data.create({
        Title: srcKey,
        count: 1
      });
      console.log('Data added successfully');
    }

    res.status(200).send('Data added successfully');
  } catch (err) {
    console.error('Failed to add/update data:', err);
    res.status(500).send('Failed to add/update data');
  }
});

// Start the server

// ...

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

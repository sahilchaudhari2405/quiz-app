
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  correctOption: {
    type: String,
    required: true,
  },
  image: {
    type: String, 
    default: null,
  },
},{timestamps:true});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;

import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  newTitle: {
    type: String,
    required: true,
  },
  newDescription: {
    type: String,
    required: true,
  },
  newResponsible: {
    type: String,
    required: true,
  },
  newStartDate: {
    type: Date,
    required: true,
  },
  newEndDate: {
    type: Date,
    required: true,
  }

}, { versionKey: false });

export default mongoose.model('Task', taskSchema);

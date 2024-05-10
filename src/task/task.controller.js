'use strict'

import Task from './task.model.js'


export const addTask = async (req, res) => {
  const { newTitle, newDescription, newResponsible, newStartDate, newEndDate } = req.body;

  if (!newTitle || !newDescription || !newResponsible || !newStartDate || !newEndDate) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newTask = new Task({
    newTitle,
    newDescription,
    newResponsible,
    newStartDate,
    newEndDate
  });

  try {
    // Guarda la tarea en la base de datos
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ message: 'Error creating task', error });
  }
};


export const getTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.send(tasks);
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: 'Error al obtener las tareas' });
  }
};



export const deleteTask = async (req, res) => {
  const taskId = req.params.id;

  try {
    const deletedTask = await Task.findByIdAndDelete(taskId);
    if (!deletedTask) {
      return res.status(404).send('Task not found');
    }
    return res.send({ message: 'Task deleted successfully' })
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).send('Error deleting task');
  }
}

export const updateTask = async (req, res) => {
  try {

    let data = req.body
    let { id } = req.params

    let update = (data)
    if (!update) return res.status(400).send({ message: 'No data send succesfully!' })

    let updateTask = await Task.findOneAndUpdate(
      { _id: id },
      data,
      { new: true }
    )
    if (!updateTask) return res.status(400).send({ message: 'No task found' })
    return res.send({ message: 'Task found!', updateTask })

  } catch (err) {
    console.error(err)
    return res.status(500).send({ message: 'Error to updating your task!' })
  }
}

export const searchTask = async (req, res) => {
  try {
    let { search } = req.body
    let task = await Task.find(
      { name: { $regex: new RegExp(search, 'i') } }
    )
    if (task.length === 0) {
      return res.status(404).send({ message: 'Task not found' })
    }
    if (!task) return res.status(404).send({ message: 'Task not found' })
    return res.send({ message: 'Task found', task })
  } catch (err) {
    return res.status(500).send({ message: 'Error searching task' })
  }
}

/*
export const markTask = async (taskId) => {
    try {
      let updatedTask = await Task.findOneAndUpdate(
        { _id: taskId },
        { state: 'COMPLETE' },
        { new: true }
      );
  
      return updatedTask;
    } catch (error) {
      console.error('Error marking task as complete:', error);
      throw error;
    }
  };
  */

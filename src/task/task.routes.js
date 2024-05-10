'use strict'

import { Router } from 'express'
import { addTask, deleteTask, updateTask, searchTask, getTask } from './task.controller.js'

const api = Router();

api.post('/addTask', addTask)
api.put('/updateTask/:id', updateTask)
api.delete('/deleteTask/:id', deleteTask)
api.post('/search', searchTask)
api.get('/getTask', getTask)

export default api
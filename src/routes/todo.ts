import { Router } from 'express';
import Todo from '../models/todo';

const router = Router();

// Get all todos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Create a new todo
router.post('/', async (req, res) => {
    try {
        const newTodo = new Todo({
            title: req.body.title,
            description: req.body.description,
        });
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a todo
router.put('/:id', async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedTodo);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Delete a todo
router.delete('/:id', async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        res.json(deletedTodo);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;

import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateTodoDTO } from '../../domain/dtos';

export class TodosController {
  //* Dependency Injection
  constructor() {}

  public getTodos = async (req: Request, res: Response) => {
    const todos = await prisma.orm.public.todo.all();
    return res.json(todos);
  };

  public getTodoById = async (req: Request, res: Response) => {
    const id = +req.params.id!;
    if (isNaN(id))
      return res.status(400).json({ error: 'ID argument is not a number' });

    const todo = await prisma.orm.public.todo.where({ id }).first();

    todo
      ? res.json(todo)
      : res.status(404).json({ error: `TODO with id ${id} not found` });
  };

  public createTodo = async (req: Request, res: Response) => {
    const [error, createTodoDto] = CreateTodoDTO.create(req.body);

    if (error !== undefined) return res.status(400).json({ error });

    const todo = await prisma.orm.public.todo.create({
      ...createTodoDto,
    });

    return res.status(201).json(todo);
  };

  public updateTodo = async (req: Request, res: Response) => {
    const id = +req.params.id!;
    if (isNaN(id))
      return res.status(400).json({ error: 'ID argument is not a number' });

    const todo = await prisma.orm.public.todo.where({ id }).first();

    if (!todo)
      return res.status(404).json({ error: `Todo with id ${id} not found` });

    const { text, completedAt } = req.body;

    const updatedTodo = await prisma.orm.public.todo.where({ id }).update({
      text: text || todo.text,
      completedAt: completedAt ? new Date(completedAt) : todo.completedAt,
    });

    return res.json(updatedTodo);
  };

  public deleteTodo = async (req: Request, res: Response) => {
    const id = +req.params.id!;
    if (isNaN(id))
      return res.status(400).json({ error: 'ID argument is not a number' });

    const todo = await prisma.orm.public.todo.where({ id }).first();
    if (!todo)
      return res.status(404).json({ error: `Todo with id ${id} not found` });

    const deleted = await prisma.orm.public.todo.where({ id }).delete();

    deleted
      ? res.json(deleted)
      : res.status(400).json({ error: `Todo with id ${id} not found` });
  };
}

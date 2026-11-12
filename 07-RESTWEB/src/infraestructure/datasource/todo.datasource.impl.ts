import { prisma } from '../../data/postgres';
import {
  CreateTodoDTO,
  TodoDatasource,
  TodoEntity,
  UpdateTodoDTO,
} from '../../domain';

export class TodoDatasourceImpl implements TodoDatasource {
  async create(createTodoDto: CreateTodoDTO): Promise<TodoEntity> {
    const todo = await prisma.orm.public.todo.create({
      ...createTodoDto,
    });

    return TodoEntity.fromObject(todo);
  }

  async getAll(): Promise<TodoEntity[]> {
    const todos = await prisma.orm.public.todo.all();

    return todos.map((todo) => TodoEntity.fromObject(todo));
  }

  async findById(id: number): Promise<TodoEntity> {
    const todo = await prisma.orm.public.todo.where({ id }).first();

    if (!todo) throw `Todo with id ${id} not found`;
    return TodoEntity.fromObject(todo);
  }

  async updateById(updateTodoDto: UpdateTodoDTO): Promise<TodoEntity> {
    await this.findById(updateTodoDto.id);

    const updatedTodo = await prisma.orm.public.todo
      .where({ id: updateTodoDto.id })
      .update({
        ...updateTodoDto.values,
      });

    if (!updatedTodo) throw `Todo with id ${updateTodoDto.id} not found`;

    return TodoEntity.fromObject(updatedTodo);
  }

  async deleteById(id: number): Promise<TodoEntity> {
    await this.findById(id);

    const deleted = await prisma.orm.public.todo.where({ id }).delete();

    if (!deleted) throw new Error(`Todo with id ${id} not found`);

    return TodoEntity.fromObject(deleted);
  }
}

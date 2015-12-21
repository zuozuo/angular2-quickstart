import { Todo } from './todo'

export class Todos {
	public todos: Array<Todo> = [];

	constructor(todos: Array<Todo>) {
		this.todos = todos
	}

	add(todo: String) {
		this.todos.push(new Todo(todo));
	}

	del(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
	}
}

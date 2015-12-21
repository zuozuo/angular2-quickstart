import {Component} from 'angular2/core';
import {TodoList} from './todo-list.component';
import {Todos} from './todos'
import {Todo} from './todo'

@Component({
	selector: 'todo-app',
	template: `
		<h1>{{title}}</h1>
		<h2>Todo List</h2>
		<todo-list [todos]='todos'></todo-list>
	`
	directives: [TodoList]
})

export class TodoAppComponent {
	public title = 'Todo app example';
	public todos = new Todos([
		new Todo('todo1'),
		new Todo('todo2'),
		new Todo('todo3'),
		new Todo('todo4')
	])
}

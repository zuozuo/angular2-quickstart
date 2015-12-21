import {Component} from 'angular2/core';
import { TodoItem } from './todo-item.component';

@Component({
  selector: 'todo-list',
  templateUrl: '../templates/todo-list.html'
  styleUrls: ['../styles/todo-list.css']
	inputs: ['todos']
	directives: [TodoItem]
})

export class TodoList {
  public todos: Todos;

	createTodo(event, title: string) {
		this.todos.add(title);
    event.target.getElementsByTagName('input')[0].value = '';
		event.preventDefault;
	}
}

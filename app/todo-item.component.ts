import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';

@Component({
  selector: 'todo-item',
  templateUrl: '../templates/todo-item.html'
	styleUrls: ['../styles/todo-item.css']
	inputs: ['todo']
  directives: [NgClass]
})

export class TodoItem {
  public todo: Todo;

	markAsDone(todo: Todo) {
		todo.toggleState()
	}
}

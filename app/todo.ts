import { Todo } from './todo'

export class Todo {
	title: string;
	isDone: boolean;

	constructor(title: string, isDone: boolean = false) {
		this.title = title;
		this.isDone = isDone;
	}

	toggleState() {
		this.isDone = !this.isDone;
	}

	updateTitle(title: string) {
		this.title = title;
	}
}

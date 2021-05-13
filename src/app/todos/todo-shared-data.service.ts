import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from "./todos.interface";

@Injectable({
    providedIn: 'root'
})
export class TodoSharedDataService {

    private todoSource = new BehaviorSubject({} as Todo);

    constructor() {}

    addTodo(todo: Todo) {
        this.todoSource.next(todo);
    }

    currentTodo() {
        return this.todoSource.asObservable();
    }
}
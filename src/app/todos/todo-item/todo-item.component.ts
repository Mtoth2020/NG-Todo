import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { Todo } from "../todos.interface";
import { TodoService} from "../todo.service";

@Component({
  selector: 'todo-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input()
  input: Todo | undefined;

  @Output()
  deleteTodoId: EventEmitter<number> = new EventEmitter<number>();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  deleteTask(id: number) {
    this.todoService.deleteTodo(id)
        .subscribe(
            (response) => {
              console.log(response);
              this.deleteTodoId.emit(id);
            }
        )
  }

    /*deleteTask(id: number) {
        this.todoService.deleteTodo(id)
            .subscribe(
                todos => {
                    console.log("todos", todos);
                    this.todos = todos;
                }, errorMsg => {
                    this.errorMessage = errorMsg
                })

    }*/

}

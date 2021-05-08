import { Component, OnInit, Input } from '@angular/core';
import { Todo } from "../todos.interface";
import { TodoService} from "../todo.service";

@Component({
  selector: 'todo-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  todos: Todo[] = [];
  //errorMessage = '';

  @Input()
  input: Todo | undefined;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  deleteTask(id: number) {
    this.todoService.deleteTodo(id)
        .subscribe(
            (response) => {
              console.log(response);
              this.todoService.getTodos();
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

import { Component, OnInit, Input } from '@angular/core';
import { Todo } from "../todos.interface";
import { TodoService } from "../todo.service";

enum NotificationColor {
  Red = "red",
  Green = "green"
}

@Component({
  selector: 'todo-todo-form-container',
  templateUrl: './todo-form-container.component.html',
  styleUrls: ['./todo-form-container.component.scss']
})
export class TodoFormContainerComponent implements OnInit {

  @Input()
  postId: number | null = null;
  userTodo: Todo | null = null;
  errorMessage: string = "";
  textMessage: string = "";
  style: NotificationColor | string = "";
  isNotificationVisible: boolean = false;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  onAddNewTodo(newTodoEvent: Todo) {
    this.todoService.sendTodo(newTodoEvent).subscribe({
      next: result => {
        this.userTodo = result;
        this.textMessage = "Your todo added successfully!";
        this.style = NotificationColor.Green;
        this.isNotificationVisible = true;
      },
      error: error => {
        this.errorMessage = "Send failed. Network error. Please try again later!";
        error.message = this.errorMessage;
        this.style = NotificationColor.Red;
        this.isNotificationVisible = true;
      }
    })
  }


}

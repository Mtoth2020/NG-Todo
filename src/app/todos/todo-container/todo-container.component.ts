import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from "../todo.service";
import { Todo } from "../todos.interface";
import { ActivatedRoute, Router } from "@angular/router";
import {TodoSharedDataService} from "../todo-shared-data.service";

@Component({
  selector: 'todo-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent implements OnInit {

  todos: Todo[] = [];

  @Input()
  todo: Todo | undefined;

  constructor(
      private todoService: TodoService,
      private todoSharedDataService: TodoSharedDataService,
      private route: ActivatedRoute,
      private router: Router
  ) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });

    this.todoSharedDataService.currentTodo().subscribe(todo => {
      this.todos.push(todo);
    });
  }

  deleteTodo(todoId: number): void {
    this.todos = this.todos.filter(todo => todo.id !== todoId); //amelyik id-jű tételt kitöröltem arra keressen rá és amely nem egyezik vele azt jelenítse meg
  }

}

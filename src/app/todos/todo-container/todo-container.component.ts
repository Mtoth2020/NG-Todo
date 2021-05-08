import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from "../todo.service";
import { Todo } from "../todos.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'todo-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent implements OnInit {

  todos: Todo[] = [];

  @Input()
  todo: Todo | undefined;

  constructor(private todoService: TodoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    const postId = Number.parseInt(idString || "");
    this.todoService.getTodosByPostId(postId).subscribe(todos => {
      this.todos = todos;
    })
  }

}

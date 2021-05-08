import { Component, OnInit, Input } from '@angular/core';
import { Todo } from "../todos.interface";

@Component({
  selector: 'todo-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input()
  input: Todo | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

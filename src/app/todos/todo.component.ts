import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-todo',
  template: `
    <div class="formBox">
      <todo-todo-form-container></todo-todo-form-container>
    </div>
    <todo-todo-container></todo-todo-container>
  `,
  styles: [
  ]
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

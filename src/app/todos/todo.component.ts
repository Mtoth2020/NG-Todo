import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-todo',
  template: `      
    <todo-todo-container></todo-todo-container>
    <div class="formBox">
      <todo-todo-form-container></todo-todo-form-container>
    </div>
  `,
  styles: [
  ]
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

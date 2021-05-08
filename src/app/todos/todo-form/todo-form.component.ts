import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { Todo } from "../todos.interface";

@Component({
  selector: 'todo-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']

})
export class TodoFormComponent implements OnInit {

  @Output()
  newTodoEvent = new EventEmitter<Todo>();

  todoForm: FormGroup = new FormGroup({
    name: new FormControl(
        null,
        [
          Validators.required,
        ]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.newTodoEvent.emit(this.todoForm.value);
  }

  get name(): AbstractControl | null {
    return this.todoForm.get('name');
  }

}

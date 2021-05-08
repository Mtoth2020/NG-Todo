import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup, Validators } from "@angular/forms";
import {Todo} from "../todos/todos.interface";

@Component({
  selector: 'todo-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {

  editForm: FormGroup = new FormGroup({
    name: new FormControl(
        null,
        [
          Validators.required,
        ]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  get name(): AbstractControl | null {
    return this.editForm.get('name');
  }

}

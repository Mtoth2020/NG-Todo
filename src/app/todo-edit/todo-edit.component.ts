import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Todo} from "../todos/todos.interface";
import {ActivatedRoute} from "@angular/router";
import {TodoService} from "../todos/todo.service";

@Component({
  selector: 'todo-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {

  id: number;

  editForm: FormGroup = new FormGroup({
    newName: new FormControl(
        null,
        [
          Validators.required,
        ]),
  });

  constructor(private route: ActivatedRoute, private todoService: TodoService) {
  }

  ngOnInit(): void {
  }

  get newName(): AbstractControl | null {
    return this.editForm.get('name');
  }

  updateTodo() {
    const newValue: Todo = this.newName.value;
    this.todoService.updateTodo(this.id, newValue).subscribe(response => {
      console.log("updated", newValue);
    })
  }

}

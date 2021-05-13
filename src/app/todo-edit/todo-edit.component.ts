import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Todo} from "../todos/todos.interface";
import {ActivatedRoute} from "@angular/router";
import {TodoService} from "../todos/todo.service";
import {switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'todo-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {

  id: number;
  todo: Todo | undefined;
  errorMessage: string = "";
  response: boolean = false;

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
    this.route.params
        .pipe(
            tap(params => {
                  this.id = params.id;
                }
            ),
            switchMap(() => this.todoService.getTodoById(this.id)))
        .subscribe(response => {
          console.log(this.todo)
        }, error => {
          this.errorMessage = error;
        });
  }

  get newName(): AbstractControl | null {
    return this.editForm.get('name');
  }

  updateTodo() {
    const newTodo: Todo = {
        name: this.editForm.getRawValue().newName,
        id: this.id
    }
    this.todoService.updateTodo(newTodo).subscribe(response => {
      console.log("updated", newTodo);
      this.response = true;
    })
  }

}

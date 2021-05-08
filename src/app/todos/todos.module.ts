import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoFormContainerComponent } from './todo-form-container/todo-form-container.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { TodoComponent } from './todo.component';


@NgModule({
  declarations: [
    TodoContainerComponent,
    TodoFormComponent,
    TodoFormContainerComponent,
    TodoItemComponent,
    TodoComponent
  ],
  exports: [
    TodoContainerComponent,
    TodoFormContainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class TodosModule { }

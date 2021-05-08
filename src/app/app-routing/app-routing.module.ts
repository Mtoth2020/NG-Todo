import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import { TodoEditComponent} from "../todo-edit/todo-edit.component";
import {TodoComponent} from "../todos/todo.component";

const routes: Routes = [
  { path: "", component: TodoComponent},
  { path: "edit/:id", component: TodoEditComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

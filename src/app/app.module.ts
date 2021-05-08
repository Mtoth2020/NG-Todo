import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodosModule } from "./todos/todos.module";
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule} from "./app-routing/app-routing.module";
import { TodoEditComponent } from "./todo-edit/todo-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    TodoEditComponent
  ],
  imports: [
    BrowserModule,
    TodosModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

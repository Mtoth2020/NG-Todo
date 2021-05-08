import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Todo } from "./todos.interface";

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    static readonly API_URL = `http://localhost:3000/todos`

    constructor(private http: HttpClient) {}

    getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(TodoService.API_URL);
    }

    getTodosByPostId(postId: number):Observable<Todo[]>{
        return this.http.get<Todo[]>(TodoService.API_URL + `?postId=${postId}`)
    }

    getTodoById(id: number):Observable<Todo[]>{
        return this.http.get<Todo[]>(TodoService.API_URL + `/${id}`)
    }

    sendTodo(todo: Todo): Observable<Todo>{
        return this.http.post<Todo>(TodoService.API_URL, todo)
    }

}


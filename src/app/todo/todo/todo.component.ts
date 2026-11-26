import { Component, Input, ChangeDetectionStrategy, inject } from '@angular/core';

import { TodoService } from '../service/todo.service';

import { HttpClient, httpResource } from '@angular/common/http';
import { API } from 'src/config/api.config';
import { rxResource } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

export interface TodoApiResponse {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
}

export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}


@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    providers: [TodoService]
})
export class TodoComponent {
  // @Input()
  // todos: Todo[] | null  = [];
  httpClient = inject(HttpClient)
 // todoRessource = httpResource<TodoApiResponse>(()=>API.todo);
  todoRessource = rxResource({
    stream: () => this.httpClient.get<TodoApiResponse>(API.todo).pipe(map(response => response.todos)),
    defaultValue: []
  });

}

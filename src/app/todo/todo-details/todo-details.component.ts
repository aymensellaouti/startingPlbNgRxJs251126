import { httpResource } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { API } from 'src/config/api.config';
import { TodoApiResponse } from '../todo/todo.component';

export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
@Component({
  imports: [],
  selector: 'app-todo-details',
  styleUrl: './todo-details.component.css',
  templateUrl: './todo-details.component.html',
})
export class TodoDetailsComponent {
  id = signal(1);
  todoRessource = httpResource<Todo | null>(()=>({
    url: API.todo + this.id()
  }), {
    defaultValue: null
  });
}

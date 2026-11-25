import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { API } from 'src/config/api.config';
import { Cv } from '../model/cv';
import { map } from 'rxjs';

export interface TodoApi {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
export interface TodoApiResponse {
  todos: TodoApi[]
  total: number
  skip: number
  limit: number
}




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  httpClient = inject(HttpClient);
  todos$ = this.httpClient.get<TodoApiResponse>(API.todo).pipe(map(
    response => response.todos
  ));
  cvs$ = this.httpClient.get<Cv[]>(API.cv);
}

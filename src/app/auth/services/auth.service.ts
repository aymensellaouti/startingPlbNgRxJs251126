import { Injectable } from '@angular/core';
import { CredentialsDto } from '../dto/credentials.dto';
import { LoginResponseDto } from '../dto/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { API } from '../../../config/api.config';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {
    if (this.isAuthenticated()) {
      this.isLoggedIn$.next(true);
      this.isLoggedOut$.next(false);
    }
  }
  isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedOut$ =new BehaviorSubject<boolean>(true);

  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(API.login, credentials).pipe(
      tap(response => {
        this.isLoggedIn$.next(true);
        this.isLoggedOut$.next(false);
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn$.next(false);
    this.isLoggedOut$.next(true);
  }
}

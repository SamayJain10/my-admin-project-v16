import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private users: any[] = [];

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || 'null'));
    this.currentUser = this.currentUserSubject.asObservable();
    this.loadUsers();
  }

  private loadUsers() {
    this.http.get<any[]>('assets/users.json').pipe(
      catchError(() => of([]))
    ).subscribe(users => {
      this.users = users;
    });
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    const user = this.users.find(u => u.email === credentials.email && u.password === credentials.password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return of(user);
    } else {
      return of(null).pipe(
        tap(() => {
          throw new Error('Invalid credentials');
        })
      );
    }
  }

  signup(user: any): Observable<any> {
    if (this.users.find(u => u.email === user.email)) {
      return of(null).pipe(
        tap(() => {
          throw new Error('User already exists');
        })
      );
    }
    this.users.push(user);
    console.log('User added:', user);
    return of(user);
  }

  logout(): Observable<any> {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
    return of(null);
  }

  getCurrentUser(): Observable<any> {
    return this.currentUser;
  }

  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }
}
import { Injectable } from '@angular/core';
import { User } from '@models/user';
import { BehaviorSubject, Observable, of, ReplaySubject } from 'rxjs';
import { filter, map, publishLast, share, shareReplay, switchMap, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersList$: Observable<User[]>;
  userInfo$: Observable<User>;

  constructor(private http: HttpClient) { }

  getMany(): Observable<User[]> {

    if (!this.usersList$) {
      this.usersList$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
        map((users: User[]) => users.map((user: User) => ({
          id: user.id,
          name: user.name,
          email: user.email
        }))),
        shareReplay(1)
      );
    }

    return this.usersList$;
  }

  getOne(userId: number): Observable<User> {

    if (!this.userInfo$) {
      this.userInfo$ = this.http.get<User>('https://jsonplaceholder.typicode.com/users/' + userId).pipe(
        shareReplay(1)
      );
    }

    return this.userInfo$;
  }

  clearUserCache(): void {
    this.userInfo$ = null;
  }
}

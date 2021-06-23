import { Injectable } from '@angular/core';
import { User } from '@models/user';
import { BehaviorSubject, Observable, of, ReplaySubject } from 'rxjs';
import { filter, shareReplay, switchMap, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _userInfo$ = new BehaviorSubject(0);
  _usersList$ = new BehaviorSubject(1);

  userInfo$ = this._userInfo$.pipe(
    filter(Boolean),
    tap(console.log),
    switchMap((val: number) =>
      val ? this.getOne(val) : of(null)
    ),
    shareReplay({ refCount: true, bufferSize: 1 })
  )

  usersList$ = this._usersList$.pipe(
    filter(Boolean),
    switchMap((val) => val ? this.getMany() : of(null)),
    shareReplay({ refCount: true, bufferSize: 1 })
  )


  constructor(private http: HttpClient) { }

  getMany(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getOne(id: number): Observable<User> {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/' + id);
  }
}

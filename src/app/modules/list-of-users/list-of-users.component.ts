import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@models/user';
import { UserService } from '@shared/user.service';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss']
})
export class ListOfUsersComponent implements OnInit {

  users$: Observable<User[]>;
  displayedColumns: string[] = ['name', 'email'];
  constructor(private service: UserService, private route: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.users$ = this.service.usersList$.pipe(
      map((users: User[]) => users.map((user: User) => ({
        id: user.id,
        name: user.name,
        email: user.email
      })))
    );
  }

  getRecord(user: User): void {
    this.route.navigate(['user-info/' + user.id]);
  }
}

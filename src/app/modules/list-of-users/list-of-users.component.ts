import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@models/user';
import { UserService } from '@shared/user.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.scss']
})
export class ListOfUsersComponent implements OnInit {

  users: User[];
  displayedColumns: string[] = ['name', 'email'];
  constructor(private service: UserService, private route: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.service.usersList$.pipe(
      map((users: User[]) => users.map((user: User) => ({
        id: user.id,
        name: user.name,
        email: user.email
      })))
    ).subscribe(users => this.users = users);
  }

  getRecord(user: User): void {
    this.route.navigate(['user-info/' + user.id]);
  }
}

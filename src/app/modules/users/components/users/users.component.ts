import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@models/user';
import { UserService } from '@shared/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]>;

  displayedColumns: string[] = ['name', 'email'];

  constructor(private service: UserService, private route: Router) { }

  ngOnInit(): void {
    this.users$ = this.service.getMany();
  }

  getRecord(user: User): void {
    this.route.navigate(['users/' + user.id]);
  }

}

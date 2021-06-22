import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@models/user';
import { UserService } from '@shared/user.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user: User;

  constructor(private service: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    const userId = +this.route.snapshot.params.id;
    this.service.userInfo$.subscribe(user => this.user = user);
    if(userId !== this.user?.id) this.service._userInfo$.next(userId);
  }

}

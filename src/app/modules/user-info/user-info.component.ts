import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@models/user';
import { UserService } from '@shared/user.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user$: Observable<User>;

  constructor(private service: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const userId = +this.route.snapshot.params.id;
    this.user$ = this.service.userInfo$;
    this.service._userInfo$.next(userId);
  }
}

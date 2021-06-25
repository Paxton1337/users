import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@models/user';
import { UserService } from '@shared/user.service';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

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

    this.user$ = this.service.getOne(userId).pipe(
      switchMap(user => {
        if (user.id !== userId) {
          this.service.clearUserCache();
          return this.service.getOne(userId);
        } else {
          return of(user);
        }
      })
    );
  }
}

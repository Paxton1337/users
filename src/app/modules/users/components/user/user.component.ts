import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@models/user';
import { UserService } from '@shared/user.service';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {

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

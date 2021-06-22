import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInfoRoutingModule } from './user-info-routing.module';
import { UserInfoComponent } from './user-info.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [UserInfoComponent],
  imports: [
    CommonModule,
    UserInfoRoutingModule,
    MatCardModule
  ]
})
export class UserInfoModule { }

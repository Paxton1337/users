import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [UsersComponent, UserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    MatCardModule
  ]
})
export class UsersModule { }

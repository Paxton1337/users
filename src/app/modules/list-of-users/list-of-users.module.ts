import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListOfUsersRoutingModule } from './list-of-users-routing.module';
import { ListOfUsersComponent } from './list-of-users.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ListOfUsersComponent],
  imports: [
    CommonModule,
    ListOfUsersRoutingModule,
    MatTableModule
  ]
})
export class ListOfUsersModule { }

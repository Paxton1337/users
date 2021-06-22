import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOfUsersComponent } from './list-of-users.component';

const routes: Routes = [{ path: '', component: ListOfUsersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListOfUsersRoutingModule { }

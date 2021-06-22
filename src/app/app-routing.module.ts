import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list-of-users', pathMatch: 'full'},
  { path: 'list-of-users', loadChildren: () => import('./modules/list-of-users/list-of-users.module').then(m => m.ListOfUsersModule) },
  { path: 'user-info', loadChildren: () => import('./modules/user-info/user-info.module').then(m => m.UserInfoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

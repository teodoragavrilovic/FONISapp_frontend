import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import {AuthComponent} from "./layout/auth/auth.component";
import {UsersComponent} from "./layout/users/users.component";
import {ArchivedTasksComponent} from "./layout/archived-tasks/archived-tasks.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'auth',
    component: AuthComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'archive',
    component: ArchivedTasksComponent,
    //canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

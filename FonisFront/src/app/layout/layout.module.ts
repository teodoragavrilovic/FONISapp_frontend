import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { BacklogModule } from '../components/backlog/backlog.module';
import { BoardModule } from '../components/board/board.module';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AuthComponent,
    MainComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    BacklogModule,
    BoardModule,
    SharedModule
  ]
})
export class LayoutModule { }

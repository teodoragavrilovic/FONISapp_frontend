import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { BacklogModule } from '../components/backlog/backlog.module';
import { BoardModule } from '../components/board/board.module';
import { UsersComponent } from './users/users.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ArchivedTaskComponentComponent } from './archived-task-component/archived-task-component.component';
import { ArchivedTasksComponent } from './archived-tasks/archived-tasks.component';


@NgModule({
  declarations: [
    AuthComponent,
    MainComponent,
    UsersComponent,
    ArchivedTaskComponentComponent,
    ArchivedTasksComponent
  ],
  imports: [
    CommonModule,
    BacklogModule,
    BoardModule,
    SharedModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class LayoutModule { }

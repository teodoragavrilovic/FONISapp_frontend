import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskComponent } from './task/task.component';
import { DialogInsertTaskComponent } from './dialog-insert-task/dialog-insert-task.component';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DialogDeletedTasksComponent } from './dialog-deleted-tasks/dialog-deleted-tasks.component';
import { DialogArchiveTaskComponent } from './dialog-archive-task/dialog-archive-task.component';
import { GroupComponent } from './group/group.component';
import { UserComponent } from './user/user.component';
import { DialogInsertUserComponent } from './dialog-insert-user/dialog-insert-user.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    NavbarComponent,
    TaskComponent,
    DialogInsertTaskComponent,
    DialogDeletedTasksComponent,
    DialogArchiveTaskComponent,
    GroupComponent,
    UserComponent,
    DialogInsertUserComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule
  ],
  exports: [
    TaskComponent,
    NavbarComponent,
    DialogArchiveTaskComponent,
    GroupComponent,
    UserComponent,
    DialogInsertUserComponent

  ]
})
export class SharedModule { }

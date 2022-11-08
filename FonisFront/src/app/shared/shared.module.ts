import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskComponent } from './task/task.component';
import { DialogInsertTaskComponent } from './dialog-insert-task/dialog-insert-task.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DialogDeletedTasksComponent } from './dialog-deleted-tasks/dialog-deleted-tasks.component';
import { DialogArchiveTaskComponent } from './dialog-archive-task/dialog-archive-task.component';

@NgModule({
  declarations: [
    NavbarComponent,
    TaskComponent,
    DialogInsertTaskComponent,
    DialogDeletedTasksComponent,
    DialogArchiveTaskComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  exports: [
    TaskComponent,
    NavbarComponent,
  ]
})
export class SharedModule { }

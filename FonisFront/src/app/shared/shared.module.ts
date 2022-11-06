import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskComponent } from './task/task.component';
import { DialogInsertTaskComponent } from './dialog-insert-task/dialog-insert-task.component';


@NgModule({
  declarations: [
    NavbarComponent,
    TaskComponent,
    DialogInsertTaskComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskComponent,
    NavbarComponent
  ]
})
export class SharedModule { }

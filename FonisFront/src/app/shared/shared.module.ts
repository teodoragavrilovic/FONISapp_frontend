import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskComponent } from './task/task.component';



@NgModule({
  declarations: [
    NavbarComponent,
    TaskComponent
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

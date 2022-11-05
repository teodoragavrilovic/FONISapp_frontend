import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BacklogComponent } from './container/backlog/backlog.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    BacklogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    BacklogComponent
  ]
})
export class BacklogModule { }

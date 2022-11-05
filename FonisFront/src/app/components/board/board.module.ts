import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnComponent } from './components/column/column.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BoardComponent } from './container/board/board.component'; 


@NgModule({
  declarations: [
    ColumnComponent,
    BoardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule { }

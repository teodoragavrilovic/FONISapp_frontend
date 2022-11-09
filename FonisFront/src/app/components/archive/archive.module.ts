import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {ArchiveComponent} from "./container/archive/archive.component";


@NgModule({
  declarations: [
    ArchiveComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ArchiveComponent
  ]
})
export class ArchiveModule { }

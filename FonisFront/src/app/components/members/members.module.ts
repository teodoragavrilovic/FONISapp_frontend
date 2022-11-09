import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {MembersComponent} from "./container/members/members.component";




@NgModule({
  declarations: [
    MembersComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MembersComponent
  ]
})
export class MembersModule { }

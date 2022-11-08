import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dialog-archive-task',
  templateUrl: './dialog-archive-task.component.html',
  styleUrls: ['./dialog-archive-task.component.scss']
})
export class DialogArchiveTaskComponent implements OnInit {

  ArchiveForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ArchiveForm = this.formBuilder.group({
      name: ['', Validators.required],
      project: ['', Validators.required],
      description: ['', Validators.required],
      team: ['', Validators.required]
    })
  }
  saveArch(){

  }

}

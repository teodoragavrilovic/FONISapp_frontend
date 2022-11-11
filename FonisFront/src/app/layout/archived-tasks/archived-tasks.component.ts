import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ArchivedTask} from "../../shared/models/archived-task/archived-task.model";
import {MatTableDataSource} from "@angular/material/table";
import {Group} from "../../shared/models/group/group.model";

@Component({
  selector: 'app-archived-tasks',
  templateUrl: './archived-tasks.component.html',
  styleUrls: ['./archived-tasks.component.scss']
})
export class ArchivedTasksComponent implements OnInit {

  ArchiveForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  displayedColumns: string[] = ['name','description', 'responsiblePerson','team'];
  dataSource!:MatTableDataSource<ArchivedTask>;
  data: ArchivedTask[] = [];

  ngOnInit(): void {
    this.ArchiveForm = this.formBuilder.group({
      name: [{value: '', disabled: true}, Validators.required],
      description: [{value: '', disabled: true}, Validators.required],
      project: [{value: '', disabled: true}, Validators.required],
    })
  }

  showGroup(group: Group) {
    console.log(group);
    this.data = group.archivedTasks;
    this.ArchiveForm.patchValue({name: group.name, description: group.description, project: group.project});
  }
}

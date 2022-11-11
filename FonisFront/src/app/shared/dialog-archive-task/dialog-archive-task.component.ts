import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ArchivedTask} from "../models/archived-task/archived-task.model";
import {MatTableDataSource} from "@angular/material/table";
import {Group} from "../models/group/group.model";
import {GroupService} from "../services/group/group.service";

@Component({
  selector: 'app-dialog-archive-task',
  templateUrl: './dialog-archive-task.component.html',
  styleUrls: ['./dialog-archive-task.component.scss']
})
export class DialogArchiveTaskComponent implements OnInit {

  ArchiveForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: ArchivedTask[],
              private dialogRef: MatDialogRef<DialogArchiveTaskComponent>,
              private groupService: GroupService) { }

  displayedColumns: string[] = ['name','description', 'responsiblePerson','team'];
  dataSource!:MatTableDataSource<ArchivedTask>;

  ngOnInit(): void {
    this.ArchiveForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      project: ['', Validators.required],
    })
  }
  saveArch(){

    let group: Group = {
      name: this.ArchiveForm.value['name'],
      description: this.ArchiveForm.value['description'],
      project: this.ArchiveForm.value['project'],
      archivedTasks: this.data
    };
    console.log(group);
    this.groupService.saveGroup(group).subscribe();
    this.dialogRef.close();
    // if(this.editTask){
    //   task.taskId = this.editTask.taskId;
    //   this.taskService.updateTask(task).subscribe(resp =>{
    //     this.dialogRef.close();
    //   })
    // }else {
    //   this.taskService.saveTask(task).subscribe(resp => {
    //     this.dialogRef.close();
    //   })
    // }
  }

}

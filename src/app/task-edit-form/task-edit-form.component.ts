import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TaskDataService } from '../task-data.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-edit-form',
  templateUrl: './task-edit-form.component.html',
  styleUrls: ['./task-edit-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskEditFormComponent implements OnInit {
  editTask: Task;

  constructor(
    private service: TaskDataService
  ) { }

  ngOnInit() {
  }

  changeTask(formTask) {
    Object.assign(this.editTask, formTask);
    this.service
      .addTask(this.editTask)
      .subscribe(
      );
  }
}

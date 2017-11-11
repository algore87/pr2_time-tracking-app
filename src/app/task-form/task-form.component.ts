import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TaskDataService } from '../task-data.service';
import { Task } from '../task';

// todo: Validation

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskFormComponent implements OnInit {
  newTask: Task = new Task();

  constructor(
    private service: TaskDataService
  ) { }

  ngOnInit() {
  }

  addTask(formTask) {
    Object.assign(this.newTask, formTask);
    this.service
      .addTask(this.newTask)
      .subscribe(
      );
  }
}

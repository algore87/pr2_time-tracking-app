import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-list-header',
  templateUrl: './task-list-header.component.html',
  styleUrls: ['./task-list-header.component.css']
})
export class TaskListHeaderComponent {
  /* State ----- Title ----- From ----- Details */
  newTask: Task = new Task();

  @Output()
  add: EventEmitter<Task> = new EventEmitter();

  constructor() {
  }

  addTask() {
    this.add.emit(this.newTask);
    this.newTask = new Task();
  }

}

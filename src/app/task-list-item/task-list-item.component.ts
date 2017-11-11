import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css'],
})
export class TaskListItemComponent {
  @Input() task: Task;
  activeTitle = 'Task State';

  @Output()
  remove: EventEmitter<Task> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Task> = new EventEmitter();

  constructor() {
  }

  toggleTaskComplete(task: Task) {
    this.toggleComplete.emit(task);
  }

  removeTask(task: Task) {
    this.remove.emit(task);
  }

  refreshActiveTitle() {
    this.activeTitle = (this.task.active) ? 'Stop Task' : 'Start Task';
  }
}

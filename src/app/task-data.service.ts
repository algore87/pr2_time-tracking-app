import { Injectable } from '@angular/core';
import { Task } from './task';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

@Injectable()
export class TaskDataService {

  constructor(
    private api: ApiService
  ) {
  }

  // Simulate POST /tasks
  addTask(task: Task): Observable<Task> {
    return this.api.createTask(task);
  }

  // Simulate DELETE /tasks/:id
  deleteTaskById(taskId: number): Observable<Task> {
    return this.api.deleteTaskById(taskId);
  }

  // Simulate PUT /tasks/:id
  updateTask(task: Task): Observable<Task> {
    return this.api.updateTask(task);
  }

  // Simulate GET /tasks
  getAllTasks(): Observable<Task[]> {
    return this.api.getAllTasks().delay(1000);
  }

  // Simulate GET /tasks/:id
  getTaskById(taskId: number): Observable<Task> {
    return this.api.getTaskById(taskId);
  }

  // Toggle complete
  toggleTaskComplete(task: Task) {
    task.active = !task.active;
    return this.api.updateTask(task);
  }

}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Task } from './task';
import { TaskDataService } from './task-data.service';

@Injectable()
export class TasksResolver implements Resolve<Observable<Task[]>> {

  constructor(
    private taskDataService: TaskDataService
  ) {
  }

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Task[]> {
    return this.taskDataService.getAllTasks();
  }
}

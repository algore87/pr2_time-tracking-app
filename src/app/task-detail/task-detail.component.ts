import { Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { TaskDataService } from '../task-data.service';
import { Task } from '../task';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { ClockService } from '../clock.service';

// NOT DONE

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
  providers: [TaskDataService, ClockService],
  encapsulation: ViewEncapsulation.None
})
export class TaskDetailComponent implements OnInit {
  task: Observable<Task>;

  private _clockSubscription: Subscription;
  time: Date;
  taskObj: Task;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskDataService,
    private clockService: ClockService
  ) { }

  ngOnInit() {
    this._clockSubscription = this.clockService.getClock().subscribe(time => this.time = time);

    this.task = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.taskService.getTaskById(+params.get('id')));
    this.task.subscribe(taskObj => this.taskObj = taskObj);
  }

  ngOnDestroy(): void {
    this._clockSubscription.unsubscribe();
  }
}

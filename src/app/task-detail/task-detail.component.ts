import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TaskDataService } from '../task-data.service';
import { Task } from '../task';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
  providers: [TaskDataService],
  encapsulation: ViewEncapsulation.None
})
export class TaskDetailComponent implements OnInit {
  task: Observable<Task>;
  timerTicks;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: TaskDataService
  ) { }

  ngOnInit() {

    this.task = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getTaskById(+params.get('id')));
  }

}

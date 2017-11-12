import { Component, OnInit, ViewEncapsulation, Input, NgModule } from '@angular/core';
import { TaskDataService } from '../task-data.service';
import { Task } from '../task';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-task-edit-form',
  templateUrl: './task-edit-form.component.html',
  styleUrls: ['./task-edit-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskEditFormComponent implements OnInit {
  // Todo: Form population with task.fields [value]=task.title funktioniert nicht mit ngModel :/

  task: Observable<Task>;
  taskToChange: Task;

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

  changeTask(formTask) {
    console.log(formTask.toString());
    Object.assign(this.task, formTask);
  }
}

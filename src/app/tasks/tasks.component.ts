import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../task-data.service';
import { Task } from '../task';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TaskDataService]
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(
    private taskDataService: TaskDataService,
    private route: ActivatedRoute
  ) {
  }

  public ngOnInit() {
    console.log('Ok lade Tasks...');
    this.route.data
      .map((data) => data['tasks'])
      .subscribe(
      (tasks) => {
        this.tasks = tasks;
        console.log(tasks);
      }
      );
  }

  onAddTask(task) {
    this.taskDataService
      .addTask(task)
      .subscribe(
      (newTask) => {
        this.tasks = this.tasks.concat(newTask);
      }
      );
  }

  onToggleTaskComplete(task) {
    this.taskDataService
      .toggleTaskComplete(task)
      .subscribe(
      (updatedTask) => {
        task = updatedTask;
      }
      );
  }

  onRemoveTask(task) {
    this.taskDataService
      .deleteTaskById(task.id)
      .subscribe(
      (_) => {
        this.tasks = this.tasks.filter((t) => t.id !== task.id);
      }
      );
  }
}

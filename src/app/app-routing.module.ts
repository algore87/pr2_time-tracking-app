import { TaskFormComponent } from './task-form/task-form.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksResolver } from './tasks.resolver';
import { TaskEditFormComponent } from './task-edit-form/task-edit-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full'
  },
  {
    path: 'editor',
    component: TaskFormComponent
  },
  {
    path: 'editor/:id',
    component: TaskEditFormComponent,
    resolve: {
      tasks: TasksResolver
    }
  },
  {
    path: 'tasks',
    component: TasksComponent,
    resolve: {
      tasks: TasksResolver
    }
  },
  {
    path: 'tasks/:id',
    component: TaskDetailComponent,
    resolve: {
      tasks: TasksResolver
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    TasksResolver
  ]
})
export class AppRoutingModule {
}

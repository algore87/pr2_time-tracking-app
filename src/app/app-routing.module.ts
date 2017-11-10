import { TaskDetailComponent } from './task-detail/task-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksResolver } from './tasks.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full'
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
    path: 'tasks/csv',
    redirectTo: 'tasks?format=csv',
    pathMatch: 'full'
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

import { TaskDataService } from './task-data.service';
import { ApiService } from './api.service';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListviewComponent } from './listview/listview.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListviewComponent,
    DetailviewComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ListviewComponent },
      { path: 'task', component: DetailviewComponent }
    ]),
    HttpModule
  ],
  providers: [
    ApiService,
    TaskDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

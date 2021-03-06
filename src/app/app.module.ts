import { TaskDataService } from './task-data.service';
import { ApiService } from './api.service';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { TaskListFooterComponent } from './task-list-footer/task-list-footer.component';
import { TaskListHeaderComponent } from './task-list-header/task-list-header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { FlashMessageComponent } from './flash-message/flash-message.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskEditFormComponent } from './task-edit-form/task-edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasksComponent,
    TaskListComponent,
    TaskListItemComponent,
    TaskListFooterComponent,
    TaskListHeaderComponent,
    PageNotFoundComponent,
    TaskDetailComponent,
    FlashMessageComponent,
    TaskFormComponent,
    TaskEditFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    ApiService,
    TaskDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

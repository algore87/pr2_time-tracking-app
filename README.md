# Time-Tracking-App Frontend
This project is part two of an university course about advanced webdevelopment. It provides a frontend to manage tasks.
## Didn't finish
* Start/Stop timer to track running time of the task
  * Issues with rx.js observable to add task.started_at attribute to ticker
  * Observable vs. Class handling
* Edit-Form submission and handling
  * Couldn't handle update of task with form-values especially dates
* Offline Functionality
## Used Technologies
### Framework:
- Angular
### Library:
- RxJS

### Style:
- bootstrap 4.0.0-beta.2
- fontawesome

## Installation
##### Project Setup
- clone project by `git clone https://gitlab.fbi.h-da.de/istalscho/715562-ha2.git`
- switch to directory by `cd 715562-ha2`
- install dependencies by `npm update`

##### Run Server
- run backend to provide data
- start server with angular-cli by `ng serve`

## How to use
### Navigation

Navbar | Route | Description
------ | ------| -----------
`Show Tasks` | `/` -> `/tasks` | View which lists all tasks
--- | `/tasks/<id>` | View which provides more details to the task with `<id>`
`New Task` | `/editor` | View to add a new task
--- | `/editor/<id>`| View to edit task with `<id>`
`Export Tasks` | --- | Download list of all tasks as `.csv` file

### Functionality per Route
#### `/tasks`
- Quick add a task only with _title_
- Change state of task, _active_ or _inactive_
- Get details of task
- Edit a specific task
- Remove a specific task

#### `/tasks/<id>`
- ~~Edit task~~
- ~~Remove task~~
- ~~Start/Stop timer~~

#### `/editor`
- Add task with _title_, _description_  and _type_
- Mark if task gets directly startet after creation

#### `/editor/<id>`
- Edit _title_, _description_ and _creation_-date

## Project Structure
### Components
 List of Components...
### Services
`api.service.ts` Get JSON from backend  
`task-data.service.ts` handle Data between Components and `api.service.ts`  
`clock.service.ts` should handle data to start and stop time
# License
The MIT License (MIT)

Copyright (c) 2017 Alexander Schott

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
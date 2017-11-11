import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  show = false;
  exportCsv = environment.apiUrl + '/tasks?format=csv';

  toggleCollapse() {
    this.show = !this.show;
  }

  constructor() { }

  ngOnInit() {
  }


}

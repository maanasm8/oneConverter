import { Component, OnInit } from '@angular/core';
/**
 * Tasks component (basic building block)
 * selector = 'app-tasks'
 * gets called in app.component.html through selector as
 * app.module.ts already imports this tasks.component (check @Component decorator of app.module.ts)
 * THis is called component called in another component
 */
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

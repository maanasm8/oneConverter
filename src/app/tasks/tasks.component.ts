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
  tasks = [{title:"brush", dueDate:"05-28-22", description:"Brush your teeth"}, {title:"watch", dueDate:"05-30-22", description:"Watch movie"},
{title:"clean", dueDate:"05-31-22", description:"Clean room"},
{title:"check", dueDate:"06-01-22", description:"Check closet"},
{title:"move", dueDate:"07-11-22", description:"Move room"},
{title:"bday", dueDate:"08-11-22", description:"Bday party"}]

 inputPlaceHolder = "property binding example";
 innerHTMLVar = "this is innerHTML set with property binding";


 showHoverEffect(s: string){
   alert( "Hello " + s);
 }

  ngOnInit(): void {
  }

}

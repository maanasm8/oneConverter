import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';

/**
 * Module of todo
 * Calls CompletedTasks Component
 */

@NgModule({
  declarations: [
    CompletedTasksComponent
  ],
  imports: [
    CommonModule
  ],
  //**********EXPORT THE COMPONENT WHICH WE NEED TO DISPLAY IN APP.COMPONENT.HTML******** */
  //***************VERY VERY IMP */
  exports:[CompletedTasksComponent]
})
export class TodoModule { }

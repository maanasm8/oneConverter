import { Component } from '@angular/core';


//@Component and @NgModule are class decorators, carry meta data
//This @Component carries selector, templateURL, styleURL meta data, style and template are optional.
@Component({ //Component directive
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oneConverter';
  showMessage = true;
  showHi = false;
  ifStatement = true;
  
  arr = [ {title: 'nature', speaker: 'Brian', description: 'Science'},
            {title: 'gadgets', speaker: 'Julie', description: 'Technology'}];
  //@Input and @Output are parameter/property decorators
  // @Input() data: string;
  // @Output() params: string;
  classVariable = 'two';
  classVar1 = 'one';

  sweetNameVar = "";
  
  boolVar = false ;

  readSweetInput(){
    
    this.boolVar = true;
    console.log(this.boolVar);
  }

  printText(){
    console.log("Hi button");
  }
}

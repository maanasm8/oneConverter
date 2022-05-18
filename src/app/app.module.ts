import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HighlightPipe } from './highlight.pipe';
import { TodoModule } from './todo/todo.module';
import { HoverEffectPipe } from './hover-effect.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HighlightPipe,
    HoverEffectPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

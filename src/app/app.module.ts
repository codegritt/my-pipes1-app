import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { UsdinrPipe } from './pipes/usdinr.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    UsdinrPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

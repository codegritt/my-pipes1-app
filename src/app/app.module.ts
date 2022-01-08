import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { UsdinrPipe } from './pipes/usdinr.pipe';

import { CustompipePipe } from './custompipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    UsdinrPipe,
    CustompipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

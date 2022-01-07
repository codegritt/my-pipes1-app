import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import{AppendPipe} from './custom.pipe'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppendPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

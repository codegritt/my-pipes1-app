import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { UsdinrPipe } from './pipes/usdinr.pipe';
import { MyCustomPurePipePipe } from './my-custom-pure-pipe.pipe';
import { MyCustomImpurePipePipe } from './my-custom-impure-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    UsdinrPipe,
    MyCustomPurePipePipe,
    MyCustomImpurePipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

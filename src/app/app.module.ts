import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import MaterialModule from  './material/material.module';

import { AppComponent } from './app.component';
import { InputComponent } from './countdown/input/input.component';
import { OutputComponent } from './countdown/output/output.component';
import { FormatDigitPipe } from './pipes/format-digit.pipe';
import { ComputeDigitPipe } from './pipes/compute-digit.pipe';
import { CountdownComponent } from './countdown/countdown.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    FormatDigitPipe,
    ComputeDigitPipe,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from  './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { InputComponent } from './countdown/input/input.component';
import { OutputComponent } from './countdown/output/output.component';
import { FormatDigitPipe } from './pipes/format-digit.pipe';
import { ComputeDigitPipe } from './pipes/compute-digit.pipe';
import { CountdownComponent } from './countdown/countdown.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    FormatDigitPipe,
    ComputeDigitPipe,
    CountdownComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

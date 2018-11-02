//====================================== MODULES =========================================
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from  './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
//===================================== COMPONENTS ========================================
import { AppComponent } from './app.component';
import { InputComponent } from './controller/input/input.component';
import { OutputComponent } from './controller/output/output.component';
import { PopupComponent } from './popup/popup.component';
//======================================= PIPES ===========================================
import { FormatDigitPipe } from './pipes/format-digit.pipe';
import { ComputeDigitPipe } from './pipes/compute-digit.pipe';
//====================================== SERVICES =========================================
import { InputService } from './services/input.service';
import { ControllerComponent } from './controller/controller.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    PopupComponent,
    FormatDigitPipe,
    ComputeDigitPipe,
    ControllerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [InputService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StepByStepComponent } from './step-by-step/step-by-step.component';

@NgModule({
  declarations: [
    AppComponent,
    StepByStepComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

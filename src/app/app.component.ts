import { Component } from '@angular/core';
import { EventEmitterService } from './step-by-step/event-emitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'step-by-step-tooltip';

  // Call the steps tooltip
  openStep(step) {
    EventEmitterService.get('step').emit(step);
  }
}



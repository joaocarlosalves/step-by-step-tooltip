import { Component, OnInit, Input } from '@angular/core'
import { EventEmitterService } from './event-emitter.service'

//EXAMPLE --> Object with the content, you can do wherever you want...
import * as Step from './step-content-example'

@Component({
  selector: 'step-by-step',
  templateUrl: './step-by-step.component.html',
  styleUrls: ['./step-by-step.component.scss']
})

export class StepByStepComponent implements OnInit {

  opened: boolean = false
  end: boolean = false
  currentStep: number = 1
  index: number
  selectedPage: any = {}
  position: any = {}
  @Input() page: string
  text: string
  title: string
  txtBtnNext: string = 'Next' //Initial next button text (changes to "End" if it's on the last step)

  constructor() {} // Nothing here

  ngOnInit() {
    //Global event emitter to call the step by step stuff
    EventEmitterService.get('step').subscribe(data => this.openStep(data))
  }

  //Open Step by object informed on Switch statement
  //The content is informed in the method in the (?) help button on your page
  openStep(page) {    
    this.opened = true
    switch(page) {
      //Include new steps if needed, just add new case with an object like example
      case 'steps':
        this.selectedPage = Step.default //Change with your content json or object here
        break;
    }

    this.changeStep()
  }

  //Next Step Button
  nextStep() {
    var count = this.selectedPage.length - 1
    if(this.currentStep == count) this.txtBtnNext = 'End' 

    if(this.currentStep >= this.selectedPage.length) this.closeStep() 
    else    
      if(this.currentStep) this.currentStep++      
    
    this.changeStep()
  }

  //Last Step Button
  lastStep() {
    if(this.currentStep < 1) this.currentStep = 1
    else {      
      this.currentStep--
      this.txtBtnNext = 'Next'
    }

    this.changeStep()
  }

  //It's here where the magic happens... 
  //Change step method and scroll method to get position you said before on the main object
  changeStep(){
      this.index = this.currentStep - 1       
      this.title = this.selectedPage[this.index].title
      this.text = this.selectedPage[this.index].text
      this.currentStep = this.selectedPage[this.index].step
      this.position = {
        'top': ''+this.selectedPage[this.index].top+'px',
        'left': ''+this.selectedPage[this.index].left+'px'
      }      

      var scrollPos = this.selectedPage[this.index].top - 150

      window.scrollTo(0, scrollPos)
  }

  //This method makes coffee for you...
  closeStep() {
    this.end = false
    this.txtBtnNext = 'Next'
    this.currentStep = 1
    this.opened = false
  }
}

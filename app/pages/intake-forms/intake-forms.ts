import {NavController} from 'ionic-angular';
import {Component} from "@angular/core";
import {ConsentPage} from '../consent/consent';
import {Directive, ElementRef, Renderer, Input } from '@angular/core';

/*
  Generated class for the IntakeFormsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/intake-forms/intake-forms.html',
  // selector: 'toggle-button',
  // inputs: ['isDisabled'],
  // directives: ['NgClass']
})

export class IntakeFormsPage {
  constructor(public nav: NavController,  public el: ElementRef) {
  	this.el = el; 

 // public renderer: Renderer
  
  }

// changeColor(el){
//   if(el.className == "background"){
//     el.className = "background2";
//   } else {
//     el.className = "background";
//   }
// }
  toggle(newState) {
    if (!this.isDisabled) {
      this.isOn = newState;
    }
  }
  
// bgClass = bgClass=='background' ? 'background2' : 'background';


}



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
  constructor(public nav: NavController, public el: ElementRef ) {
  	this.el = el; 
   
    // this.buttonDisabled = false;
    // el.className = string;
 // , private _className: string
  // , public renderer: Renderer
  }

  
  
  // changeColor() {
  //   if (this.className === `background`) {
  //     this.renderer.setElementClass(this.el, this.className, true);
  //   } else {
  //     this.renderer.setElementClass(this.el, this.className, false);
  //   }
  // }
 


// changeColor(el){
//   if(el.className == "background"){
//     el.className = "background2";
//   } else {
//     el.className = "background";
//   }
// }

// function changeColor(el) {
//   if (el.className == "background") {
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


//   var btn = $('button');
// btn.on('click', function() {

//   if ($(this).hasClass('disabledBtn')) {
//     $(this).removeClass('disabledBtn');
//     $(this).addClass('enabledBtn');
//   } else if ($(this).hasClass('enabledBtn')) {
//     $(this).removeClass('enabledBtn');
//     $(this).addClass('disabledBtn');
//   } else {
//     $(this).addClass('disabledBtn');
//   }
// });

// bgClass = bgClass=='background' ? 'background2' : 'background';


}



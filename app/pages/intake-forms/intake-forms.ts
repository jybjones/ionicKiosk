import {NavController} from 'ionic-angular';
import {Component} from "@angular/core";
import {ConsentPage} from '../consent/consent';
import {Directive, ElementRef, Renderer, Input} from '@angular/core';


// import {ButtonPage} from "../button/button";
/*
  Generated class for the IntakeFormsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/intake-forms/intake-forms.html',
	// directives: [IONIC_DIRECTIVES,ButtonPage]

})

export class IntakeFormsPage {
  constructor(public nav: NavController, el: ElementRef) {
  	this.el = el;  	 
  	
  }
 
 // formsClick() {
 //   if(this.hasClass('active') {
 //     this.removeClass('active')   
	// // } else {
 // //    this.addclass('blue')
 // //   }
 //  }
changeColor(el){
  if(el.className == "background"){
    el.className = "background2";
  } else {
    el.className = "background";
  }
}
// bgClass = bgClass=='background' ? 'background2' : 'background';`


}



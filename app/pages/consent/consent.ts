import {NavController} from 'ionic-angular';
import {Component} from "@angular/core";
import {PatientDetailPage} from '../patient-detail/patient-detail';
import {IntakeFormsPage} from '../intake-forms/intake-forms';
/*
  Generated class for the ConsentPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/consent/consent.html',
})

export class ConsentPage{
  constructor(public nav: NavController) {
  	this.nav = nav;

  }
  goToIntake(){
  		this.nav.push(IntakeFormsPage);
  	}
  
}
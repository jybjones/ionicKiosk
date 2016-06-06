import {Page, NavController, NavParams} from 'ionic-angular';
import {PeopleService} from '../../providers/people-service/people-service';
import {ConsentPage} from "../consent/consent";

/*
  Generated class for the PatientDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/patient-detail/patient-detail.html',
  providers: [PeopleService]
})

export class PatientDetailPage {
   patient: any;
   active: boolean = false;

  
   constructor(public nav: NavController, public navParams: NavParams, public peopleService: PeopleService) {
   	// If we navigated to this page, we will have an item available as a nav param
   	this.patient = navParams.get('patient');


   }

    verified(event) {
    this.nav.push(PatientDetailPage, {
    });
  }

  goToConsent(){
      this.nav.push(ConsentPage);
    }

  buttonClick() {
      this.active = !this.active;
     
    }


}


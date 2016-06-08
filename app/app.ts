// import {Component, Platform, MenuController} from 'ionic-angular';
// import {StatusBar} from 'ionic-native';

import {Component} from "@angular/core";
import {ionicBootstrap, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
// import {TabsPage} from './pages/tabs/tabs';
import {CheckinPage} from './pages/checkin/checkin';
import {LoginPage} from './pages/login/login';
import {PatientDetailPage} from './pages/patient-detail/patient-detail';
import {ConsentPage} from "./pages/consent/consent";

import {PeopleService} from "./providers/people-service/people-service.ts"

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [PeopleService]);
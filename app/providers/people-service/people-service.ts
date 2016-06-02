import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PeopleService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PeopleService {
  patients: any[] = [
    {
      id: 1,
      firstName: "Amy",
      lastName: "Taylor",
      doctor: "Dr. Randy Pittman",
      appointmentTime: "08:00 AM",
      dob: "11/14/1983",
      idNumber: "448-21-0891",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/amy_taylor.jpg"
    },
    {
      id: 2,
      firstName: "Anup",
      lastName: "Gupta",
      doctor: "Dr. Awesome Town",
      appointmentTime: "09:00 AM",
      dob: "01/14/1970",
      idNumber: "555-98-9851",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/anup_gupta.jpg"
    },
    {
      id: 3,
      firstName: "Michael",
      lastName: "Jones",
      doctor: "Dr. Samantha Jones",
      appointmentTime: "10:00 AM",
      dob: "09/14/1976",
      idNumber: "666-66-6666",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg"
    },
    {
      id: 4,
      firstName: "Caroline",
      lastName: "Kingsley",
      doctor: "Dr. Kendrick Lamar",
      appointmentTime: "11:00 AM",
      dob: "12/14/1970",
      idNumber: "111-222-0456",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
    },
    {
      id: 5,
      firstName: "James",
      lastName: "Kennedy",
      doctor: "Dr. Randy Pittman",
      appointmentTime: "08:30 AM",
      dob: "11/14/1990",
      idNumber: "333-21-8976",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/james_kennedy.jpg"
    },
    {
      id: 6,
      firstName: "Jennifer",
      lastName: "Wu",
      doctor: "Dr. Beyonce",
      appointmentTime: "02:00 PM",
      dob: "11/14/1991",
      idNumber: "657-20-8642",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg"
    },
    {
      id: 7,
      firstName: "Jonathan",
      lastName: "Bradley",
      doctor: "Dr. Jennifer Jones",
      appointmentTime: "04:00 PM",
      dob: "11/14/1985",
      idNumber: "785-42-5555",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jonathan_bradley.jpg"
    },
    {
      id: 8,
      firstName: "Kenneth",
      lastName: "Sato",
      doctor: "Dr. Randy Pittman",
      appointmentTime: "08:45 AM",
      dob: "11/14/1990",
      idNumber: "467-32-0872",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/kenneth_sato.jpg"
    },
    {
      id: 9,
      firstName: "Lisa",
      lastName: "Parker",
      doctor: "Dr. Jim Cipriani",
      appointmentTime: "11:15 AM",
      dob: "11/14/1972",
      idNumber: "434-11-0999",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/lisa_parker.jpg"
    },
    {
      id: 10,
      firstName: "Brad",
      lastName: "Moretti",
      doctor: "Dr. Chelsea Wood",
      appointmentTime: "08:50 AM",
      dob: "11/14/1989",
      idNumber: "763-99-5231",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/brad_moretti.jpg"
    },
    {
      id: 11,
      firstName: "Michelle",
      lastName: "Lambert",
      doctor: "Dr. Greg Wiley",
      appointmentTime: "10:00 AM",
      dob: "11/14/1950",
      idNumber: "782-44-0921",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michelle_lambert.jpg"
    },
    {
      id: 12,
      firstName: "Miriam",
      lastName: "Aupont",
      doctor: "Dr. Randy Pittman",
      appointmentTime: "08:00 AM",
      dob: "11/14/1900",
      idNumber: "319-82-9257",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/miriam_aupont.jpg"
    },
    {
      id: 13,
      firstName: "Olivia",
      lastName: "Green",
      doctor: "Dr. Randy Pittman",
      appointmentTime: "08:00 AM",
      dob: "11/14/1900",
      idNumber: "448-21-0891",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/olivia_green.jpg"
    },
    {
      id: 14,
      firstName: "Robert",
      lastName: "Sullivan",
      doctor: "Dr. Randy Pittman",
      appointmentTime: "08:00 AM",
      dob: "11/14/1900",
      idNumber: "448-21-0891",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/robert_sullivan.jpg"
    },
    {
      id: 15,
      firstName: "Tammy",
      lastName: "Robinson",
      doctor: "Dr. Randy Pittman",
      appointmentTime: "08:00 AM",
      dob: "11/14/1900",
      idNumber: "448-21-0891",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/tammy_robinson.jpg"
    },
    {
      id: 16,
      firstName: "Victor",
      lastName: "Ochoa",
      doctor: "Dr. Randy Pittman",
      appointmentTime: "08:00 AM",
      dob: "11/14/1900",
      idNumber: "448-21-0891",
      picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/victor_ochoa.jpg"
    }

  ];

  constructor(public http: Http) {}

  findAll() {
    return new Promise((resolve, reject) => {
      resolve(this.patients);
    });
  }

  findByName(public name: String) {
    return new Promise((resolve, reject) => {
      let filtered = this.patients.filter(patient => (patient.firstName + ' ' + patient.lastName).toLowerCase().indexOf(name.toLowerCase()) > -1);
      resolve(filtered);
    });
  }

  findById(public id: Number) {
    return new Promise((resolve, reject) => {
      resolve(this.patients[id - 1]);
    });
  }
}

  
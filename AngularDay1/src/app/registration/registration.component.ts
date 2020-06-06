import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationGroup;
  userName;
  emailId;
  password;

  constructor() { }

  ngOnInit() {
    this.registrationGroup= new FormGroup({
      userName: new FormControl(),
      emailId: new FormControl(),
      password: new FormControl()
    });
  }
  registrationSubmit(data){
alert(data.userName);
  }
}

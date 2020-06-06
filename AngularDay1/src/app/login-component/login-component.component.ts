import { Component, OnInit } from '@angular/core';
import { PageserviceService } from '../pageservice.service';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  name = 'Inside child ';
  jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
  todaydate;
  jsondata;

  constructor(
    private pageservice :PageserviceService,
     private httpClient : HttpClient
     ) {
    this.todaydate = this.pageservice.showTodayDate();
   }

  ngOnInit() {
    
  }

  loginCheck(a){

    this.httpClient.get('http://jsonplaceholder.typicode.com/users').subscribe((data) => this.displaydata(data));

  }
  displaydata(data){
    this.jsonval=data;

  }

}

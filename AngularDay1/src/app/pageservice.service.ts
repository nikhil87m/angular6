import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageserviceService {

  constructor() { }
  showTodayDate() {
    let ndate = new Date();
    return ndate;
 }
}

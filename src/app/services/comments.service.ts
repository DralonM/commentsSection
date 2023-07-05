import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  firebaseURL = 'https://commentssection-7d1c4-default-rtdb.firebaseio.com/'
  jsonEXT = '.json'

  constructor(public http: HttpClient) { }

  getData() {
    let allData = this.http.get(`${this.firebaseURL}${this.jsonEXT}`);
    return allData;
  }
}

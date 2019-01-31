import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlServer } from './url';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  // url = "127.0.0.1:3000/"
  constructor(private http: HttpClient) { }

  login(data){
    return this.http.post(urlServer.ipServer+'loginadmin',data)
  }
}

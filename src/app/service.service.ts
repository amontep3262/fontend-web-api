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

  getadmin(){
    return this.http.get(urlServer.ipServer+'selectadmin/')
  }
  editadmin(data){
    return this.http.put(urlServer.ipServer+'editadmin',data)
  }
  deleteadmin(data){
    return this.http.delete(urlServer.ipServer+'deleteadmin/'+data)
  }
  addadmin(data){
    return this.http.post(urlServer.ipServer+'addadmin',data)
  }
  getuser(){
    return this.http.get(urlServer.ipServer+'selectuser/')
  }
  edituser(data){
    return this.http.put(urlServer.ipServer+'editusers',data)
  }
  deleteuser(data){
    return this.http.delete(urlServer.ipServer+'deleteusers/'+data)
  }
  getstudent(){
    return this.http.get(urlServer.ipServer+'selectstudent/')
  }
  addstudent(data){
    return this.http.post(urlServer.ipServer+'addstudent',data)
  }
  editstudent(data){
    return this.http.put(urlServer.ipServer+'editstudent',data)
  }
  deletestudent(data){
    return this.http.delete(urlServer.ipServer+'deletestudent/'+data)
  }
  getadvisor(){
    return this.http.get(urlServer.ipServer+'selectadvisor/')
  }
  editadvisor(data){
    return this.http.put(urlServer.ipServer+'editadvisor',data)
  }
  deleteadvisor(data){
    return this.http.delete(urlServer.ipServer+'deleteadvisor/'+data)
  }
  addadvisor(data){
    return this.http.post(urlServer.ipServer+'addadvisor',data)
  }
  getbehavior(){
    return this.http.get(urlServer.ipServer+'selectbehavior/')
  }
  getbehaviordepart(data){
    return this.http.get(urlServer.ipServer+'selectbehaviordepart/'+data)
  }
  getdepartment(){
    return this.http.get(urlServer.ipServer+'selectdepartment/')
  }
}

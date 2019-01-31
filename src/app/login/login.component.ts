import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  public loginform = new FormGroup({
     admin_id:  new FormControl(''),
     admin_password:  new FormControl('')
  })
  constructor(
    private service: ServiceService
  ) { }

  ngOnInit() {
  }

  login(){
    console.log(this.loginform.value)
    this.service.login(this.loginform.value).subscribe(
      (res)=>{
        alert("connected")
      },
      (err)=>{
        alert("err")
      }
    )
  }
}


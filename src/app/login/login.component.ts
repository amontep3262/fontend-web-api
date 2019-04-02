import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
// import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  public loginform = new FormGroup({
     admin_id: new FormControl(''),
     admin_password:  new FormControl('')
  })
  constructor(
    private service: ServiceService,
    private route : Router
  ) { }

  ngOnInit() {
  }

  login(){
    console.log(this.loginform.value)
    this.service.login(this.loginform.value).subscribe(
      (res)=>{
        alert("เข้าสู่ระบบสำเร็จ")
        if(res){this.route.navigate(['admin/home']);}
        // this.route.navigate(['admin/home']);
      },
      (err)=>{
        alert("err")
      }
    )
  }
}


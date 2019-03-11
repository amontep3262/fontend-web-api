import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  listuser;
  updateuser_id;
  updatepassword;
  updatefirstname;
  updatelastname;
  updateemail;
  updatephone_number;
  updatefaculty;
  updatedepartment;
  user_id;
  constructor(
    private service: ServiceService,
    private modalService: NgbModal,
  ) { }

  public edituser = new FormGroup({
    user_id: new FormControl(''),
    password: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    phone_number: new FormControl(''),
    faculty: new FormControl(''),
    department: new FormControl('')
  })

  ngOnInit() {
    this.service.getuser().subscribe(
      (res) => {
        this.listuser = res;
      }
    )
  }

  updateuser(list, modal) {
    this.updateuser_id = list.user_id;
    this.updatepassword = list.password;
    this.updatefirstname = list.firstname;
    this.updatelastname = list.lastname;
    this.updateemail = list.email;
    this.updatephone_number = list.phone_number;
    this.updatefaculty = list.faculty;
    this.updatedepartment = list.department;
    this.modalService.open(modal, { centered: true });

  }

  openModal(template) {
    this.modalService.open(template, { centered: true });
  }
  closeModal() {
    this.modalService.dismissAll()
  }

  editUser() {
    this.service.edituser(this.edituser.value).subscribe(
      (res) => {
        alert("แก้ไขสำเร็จ")
        this.modalService.dismissAll();
        this.service.getuser().subscribe(
          (res) => {
            this.listuser = res;
          }
        )
      }
    )
  }

  deleteuser(userid,modal){
    this.user_id = userid;
    this.modalService.open(modal,{centered:true});
  }

  deleteUser(){
    console.log(this.user_id);
    
    this.service.deleteuser(this.user_id).subscribe(
      (res) => {
        alert("ลบสำเร็จ")
        this.modalService.dismissAll();
        this.service.getuser().subscribe(
          (res) => {
            this.listuser = res;
          }
        )

      },
      (err) => {
        alert("ลบไม่สำเร็จ")
      }
    )
  }


}

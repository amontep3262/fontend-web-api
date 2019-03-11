import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.css']
})
export class ManageAdminComponent implements OnInit {


  listadmin;
  updateadmin_id;
  updatepassword;
  updatefirstname;
  updatelastname;
  admin_id;


  constructor(
    private service: ServiceService,
    private modalService: NgbModal,
    // public dialog :MatDialog
  ) { }

public addadmin = new FormGroup({
  admin_id : new FormControl(''),
  admin_password: new FormControl(''),
  firstname: new FormControl(''),
  lastname: new FormControl('')
})
  
public editadmin = new FormGroup({
  admin_id : new FormControl(''),
  admin_password: new FormControl(''),
  firstname: new FormControl(''),
  lastname: new FormControl('')
})

updateadmin(list,modal){
  this.updateadmin_id = list.admin_id;
  this.updatepassword = list.admin_password;
  this.updatefirstname = list.firstname;
  this.updatelastname = list.lastname;
  this.modalService.open(modal,{ centered: true });

}
deleteadmin(adminid,modal){
  this.admin_id = adminid;
  this.modalService.open(modal,{centered:true});
}



  ngOnInit() {
    this.service.getadmin().subscribe(
      (res) => {
        this.listadmin = res;
      }
    )
  }

  
  openModal(template) {
    this.modalService.open(template, { centered: true });
  }
  closeModal() {
    this.modalService.dismissAll()
  }

  editAdmin(){
    console.log(this.editadmin.value)
    this.service.editadmin(this.editadmin.value).subscribe(
      (res)=>{
        alert("แก้ไขสำเร็จ")
        this.modalService.dismissAll();
        this.service.getadmin().subscribe(
          (res) => {
            this.listadmin = res;
          }
        )
      },
      (err)=>{
        alert("แก้ไขไม่สำเร็จ")
      }
    )
  }
  deleteAdmin(){
    this.service.deleteadmin(this.admin_id).subscribe(
      (res) => {
        alert("ลบสำเร็จ")
        this.modalService.dismissAll();
        this.service.getadmin().subscribe(
          (res) => {
            this.listadmin = res;
          }
        )

      },
      (err) => {
        alert("ลบไม่สำเร็จ")
      }
    )
  }

  add_Admin(){
    console.log(this.addadmin.value);
    this.service.addadmin(this.addadmin.value).subscribe(
      (res)=>{
        alert("บันทึกสำเร็จ")
        this.modalService.dismissAll();
        this.service.getadmin().subscribe(
          (res) => {
            this.listadmin = res;
          }
        )

      },
      (err)=>{
        alert("บันทึกไม่สำเร็จ")
      }
    )
  }

}

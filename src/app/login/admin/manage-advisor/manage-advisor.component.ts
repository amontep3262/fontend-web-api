import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-manage-advisor',
  templateUrl: './manage-advisor.component.html',
  styleUrls: ['./manage-advisor.component.css']
})
export class ManageAdvisorComponent implements OnInit {


  listadvisor;
  updateadvisor_id;
  updatefirstname;
  updatelastname;
  updateemail;
  updatephone_number;
  updatefaculty;
  updatedepartment;
  advisor_id;
  constructor(
    private service: ServiceService,
    private modalService: NgbModal,
  ) { }

  public addadviser = new FormGroup({
    advisor_id: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    phone_number: new FormControl(''),
    faculty: new FormControl(''),
    department: new FormControl('')
  })
  public editadvisor = new FormGroup({
    advisor_id: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    phone_number: new FormControl(''),
    faculty: new FormControl(''),
    department: new FormControl('')
  })

  ngOnInit() {
    this.service.getadvisor().subscribe(
      (res) => {
        this.listadvisor = res;
      }
    )
  }

  updateadviser(list, modal) {
    this.updateadvisor_id = list.advisor_id;
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

  editAdvisor() {
    this.service.editadvisor(this.editadvisor.value).subscribe(
      (res) => {
        alert("แก้ไขสำเร็จ")
        this.modalService.dismissAll();
        this.service.getadvisor().subscribe(
          (res) => {
            this.listadvisor = res;
          }
        )
      }
    )
  }
  deleteadviser(advisorid,modal){
    this.advisor_id = advisorid;
    this.modalService.open(modal,{centered:true});
  }

  deleteAdvisort(){
    console.log(this.advisor_id);
    
    this.service.deleteadvisor(this.advisor_id).subscribe(
      (res) => {
        alert("ลบสำเร็จ")
        this.modalService.dismissAll();
        this.service.getadvisor().subscribe(
          (res) => {
            this.listadvisor = res;
          }
        )

      },
      (err) => {
        alert("ลบไม่สำเร็จ")
      }
    )
  }
  add_adviser() {
    console.log(this.addadviser.value);
    this.service.addadvisor(this.addadviser.value).subscribe(
      (res) => {
        alert("บันทึกสำเร็จ")
        this.modalService.dismissAll();
        this.service.getadvisor().subscribe(
          (res) => {
            this.listadvisor = res;
          }
        )

      },
      (err) => {
        alert("บันทึกไม่สำเร็จ")
      }
    )
  }

}

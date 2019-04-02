import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource, MatPaginator } from '@angular/material';
@Component({
  selector: 'app-manage-advisor',
  templateUrl: './manage-advisor.component.html',
  styleUrls: ['./manage-advisor.component.css']
})
export class ManageAdvisorComponent implements OnInit {

  displayedColumns: string[] = ['ชื่อ-นามสกุล', 'อีเมล์','เบอร์โทรศัพท์','คณะ','ภาควิชา','กลุ่ม','แก้ไข/ลบ'];
  dataSource : MatTableDataSource<[any]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  listadvisor;
  updateid
  updatestudent_group;
  updateadvisor_name;
  // updatelastname;
  updateemail;
  updatephone_number;
  updatefaculty;
  updatedepartment;
  id;
  constructor(
    private service: ServiceService,
    private modalService: NgbModal,
  ) { }

  public addadviser = new FormGroup({
    student_group: new FormControl(''),
    advisor_name: new FormControl(''),
    // lastname: new FormControl(''),
    email: new FormControl(''),
    phone_number: new FormControl(''),
    faculty: new FormControl(''),
    department: new FormControl('')
  })
  public student_group = new FormControl('')

  public editadvisor = new FormGroup({
    id: new FormControl(''),
    student_group: new FormControl(''),
    advisor_name: new FormControl(''),
    // lastname: new FormControl(''),
    email: new FormControl(''),
    phone_number: new FormControl(''),
    faculty: new FormControl(''),
    department: new FormControl('')
  })

  ngOnInit() {
    this.service.getadvisor().subscribe(
      (res) => {
        this.listadvisor = res;
        this.dataSource = new MatTableDataSource(res as any[])
            this.dataSource.paginator = this.paginator;
      }
    )
  }

  updateadviser(list, modal) {
    this.updateid = list.id;
    this.updatestudent_group = list.student_group;
    this.updateadvisor_name = list.advisor_name;
    // this.updatelastname = list.lastname;
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

  sreachadv(){
    console.log(this.student_group.value);
    
    this.service.sreachadv(this.student_group.value).subscribe(
      
      
      (res)=>{
        console.log(this.student_group.value);
        this.listadvisor=res;
        this.dataSource = new MatTableDataSource(res as any[])
            this.dataSource.paginator = this.paginator;
      }
    )
  }

  editAdvisor() {
    this.service.editadvisor(this.editadvisor.value).subscribe(
      (res) => {
        alert("แก้ไขสำเร็จ")
        this.modalService.dismissAll();
        this.service.getadvisor().subscribe(
          (res) => {
            this.listadvisor = res;
            this.dataSource = new MatTableDataSource(res as any[])
            this.dataSource.paginator = this.paginator;
          }
        )
      }
    )
  }
  deleteadviser(id,modal){
    this.id = id;
    this.modalService.open(modal,{centered:true});
  }

  deleteAdvisort(){
    console.log(this.id);
    
    this.service.deleteadvisor(this.id).subscribe(
      (res) => {
        alert("ลบสำเร็จ")
        this.modalService.dismissAll();
        this.service.getadvisor().subscribe(
          (res) => {
            this.listadvisor = res;
            this.dataSource = new MatTableDataSource(res as any[])
            this.dataSource.paginator = this.paginator;
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
            this.dataSource = new MatTableDataSource(res as any[])
            this.dataSource.paginator = this.paginator;
          }
        )

      },
      (err) => {
        alert("บันทึกไม่สำเร็จ")
      }
    )
  }

}

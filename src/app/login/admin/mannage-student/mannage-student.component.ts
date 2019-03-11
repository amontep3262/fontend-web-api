import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mannage-student',
  templateUrl: './mannage-student.component.html',
  styleUrls: ['./mannage-student.component.css']
})
export class MannageStudentComponent implements OnInit {

  liststudent;
  updatecard_id;
  updatestudent_id;
  updatefirstname;
  updatelastname;
  updatesex;
  updatebirthday;
  updatestudent_group;
  updatefaculty;
  updatedepartment;
  updateyear;
  card_id;
  constructor(
    private service: ServiceService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.service.getstudent().subscribe(
      (res) => {
            this.liststudent = res;
      }
    )

  }

  public addstudent = new FormGroup({
    card_id: new FormControl(''),
    student_id: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    sex: new FormControl(''),
    birthday: new FormControl(''),
    student_group: new FormControl(''),
    faculty: new FormControl(''),
    department: new FormControl(''),
    year: new FormControl('')
  })


  public editstudent = new FormGroup({
    card_id: new FormControl(''),
    student_id: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    sex: new FormControl(''),
    birthday: new FormControl(''),
    student_group: new FormControl(''),
    faculty: new FormControl(''),
    department: new FormControl(''),
    year: new FormControl('')
  })

  updatestudent(list, modal) {
    this.updatecard_id = list.card_id;
    this.updatestudent_id = list.student_id;
    this.updatefirstname = list.firstname;
    this.updatelastname = list.lastname;
    this.updatesex = list.sex;
    this.updatebirthday = list.birthday;
    this.updatestudent_group = list.student_group;
    this.updatefaculty = list.faculty;
    this.updatedepartment = list.department;
    this.updateyear = list.year;
    this.modalService.open(modal, { centered: true });

  }
  deletestudent(cardid, modal) {
    this.card_id = cardid;
    this.modalService.open(modal, { centered: true });
  }
  openModal(template) {
    this.modalService.open(template, { centered: true });
  }
  closeModal() {
    this.modalService.dismissAll()
  }

  editStudent() {
    console.log(this.editstudent.value)
    this.service.editstudent(this.editstudent.value).subscribe(
      (res) => {
        alert("แก้ไขสำเร็จ")
        this.modalService.dismissAll();
        this.service.getstudent().subscribe(
          (res) => {
            this.liststudent = res;
          }
        )
      },
      (err) => {
        alert("แก้ไขไม่สำเร็จ")
      }
    )
  }

  deleteStudent() {
    this.service.deletestudent(this.card_id).subscribe(
      (res) => {
        alert("ลบสำเร็จ")
        this.modalService.dismissAll();
        this.service.getstudent().subscribe(
          (res) => {
            this.liststudent = res;
          }
        )

      },
      (err) => {
        alert("ลบไม่สำเร็จ")
      }
    )
  }

  add_Student() {
    console.log(this.addstudent.value);
    this.service.addstudent(this.addstudent.value).subscribe(
      (res) => {
        alert("บันทึกสำเร็จ")
        this.modalService.dismissAll();
        this.service.getstudent().subscribe(
          (res) => {
            this.liststudent = res;
          }
        )

      },
      (err) => {
        alert("บันทึกไม่สำเร็จ")
      }
    )
  }

}

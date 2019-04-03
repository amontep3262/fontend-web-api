import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from '../../../service.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-report-behavior',
  templateUrl: './report-behavior.component.html',
  styleUrls: ['./report-behavior.component.css']
})
export class ReportBehaviorComponent implements OnInit {

  displayedColumns: string[] = ['รหัสนักศึกษา', 'ชื่อ-นามสกุล','คณะ','ภาควิชา','กลุ่ม','พฤติกรรมที่ผิดระเบียบ','วันที่','เวลา'];
  dataSource : MatTableDataSource<[any]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  listdepartment;
  listbehavior;
  date;
  month;
  year;
  constructor(
    private service: ServiceService
  ) { }

  public department = new FormControl('');
  public student_id = new FormControl('');

  ngOnInit() {
    this.service.getdepartment().subscribe(
      (res)=>{
        this.listdepartment = res;
        

      }
    )
    this.service.getbehavior().subscribe(
      (res)=>{
        this.listbehavior = res;
        console.log(this.listbehavior);
        
        this.dataSource = new MatTableDataSource(res as any[])
        this.dataSource.paginator = this.paginator;
        
      }
    )
  }

  sreachbhv(){
    console.log(this.student_id.value);
    
    this.service.sreachbhv(this.student_id.value).subscribe(
      
      
      (res)=>{
        console.log(this.student_id.value);
        this.listbehavior=res;
        console.log(this.listbehavior);
        
        this.dataSource = new MatTableDataSource(res as any[])
        this.dataSource.paginator = this.paginator;
        
      }
    )
  }

  selectdepartment(){
    console.log(this.department.value);
    
    this.service.getbehaviordepart(this.department.value).subscribe(
      (res)=>{
        // alert("suc")
        this.listbehavior = res;
        this.dataSource = new MatTableDataSource(res as any[])
        this.dataSource.paginator = this.paginator;
      }
    )
  }



}

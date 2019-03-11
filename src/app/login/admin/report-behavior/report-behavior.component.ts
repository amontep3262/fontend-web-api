import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from '../../../service.service';
@Component({
  selector: 'app-report-behavior',
  templateUrl: './report-behavior.component.html',
  styleUrls: ['./report-behavior.component.css']
})
export class ReportBehaviorComponent implements OnInit {

  listdepartment;
  listbehavior;
  date;
  month;
  year;
  constructor(
    private service: ServiceService
  ) { }

  public department = new FormControl('');

  ngOnInit() {
    this.service.getdepartment().subscribe(
      (res)=>{
        this.listdepartment = res;
        

      }
    )
    this.service.getbehavior().subscribe(
      (res)=>{
        this.listbehavior = res;
        
      }
    )
  }

  selectdepartment(){
    this.service.getbehaviordepart(this.department.value).subscribe(
      (res)=>{
        // alert("suc")
        this.listbehavior = res;
      }
    )
  }



}

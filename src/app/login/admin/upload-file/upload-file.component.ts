import { Component, OnInit } from '@angular/core';
import * as XLSX from 'ts-xlsx';
import { ServiceService } from '../../../service.service';
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  listsub;
  dataup;
  liststy;

  constructor(

    private service: ServiceService
  ) { }

  ngOnInit() {
    
  }

  dataupload;
  arrayBuffer: any;
  file: File;
  incomingfile(event) {
    this.file = event.target.files[0];
  }

   Upload() {

    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      // var worksheet = workbook[first_sheet_name];
      // console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
      this.dataupload = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      this.service.uploadfile(this.dataupload).subscribe(
        (res)=>{
          alert("succ");
        },
        (err)=>{
          alert("err");
        }
      )
    }
    fileReader.readAsArrayBuffer(this.file);
    

    // if(this.dataupload && this.listsub){
    //   console.log(this.dataupload);
    //   console.log(this.listsub);
    //   var j=0;
      
    //   for (const iterator of this.dataupload) {
        
    //     let x=0;
    //     for (const iterator of this.listsub) {
    //       console.log("-------",this.dataupload[j].subject_id);
    //       console.log(this.listsub[x].subject_id);
    //       if(this.dataupload[j].subject_id===this.listsub[x].subject_id){
    //         console.log("succ");
    //       }else{
    //         console.log("err");
    //       }
    //       x++;
    //     }
    //     j++;
    //   }
      

    // }
    
    // console.log(this.file);
   
    

  }

}

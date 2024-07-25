import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'second_practise_form';
  record:any;
  onerecord:any;
  constructor(public api:ApiService,private router:Router){
    this.api.getallstudent().subscribe((res:any)=>{
      this.record=res;
      console.log(res);
    })
  }
  savetsudent(data:any){
    console.log(data.value)
    this.api.addstudent(data.value).subscribe((res:any)=>{
      // console.log(res);
      data.reset();
    })
    this.getstudentallrecord();
  }
  editdata(id:any){
    this.api.getonerecord(id).subscribe((res:any)=>{
      console.log(res);
      this.onerecord=res;
    })
  }
  studentupdaterecord(data:any){
    let student:any={
      "student_name":data.value.student_name,
      "student_mobile":data.value.student_mobile,
      "student_email":data.value.student_email
    }
    this.api.updateonerecord(data.value.id,student).subscribe((res:any)=>{
      console.log(res);
      this.getstudentallrecord();
      this.onerecord=undefined;
    });
    
  }
  getstudentallrecord(){
    this.api.getallstudent().subscribe((res:any)=>{
      this.record=res;
      console.log(res);
    })
  }
  deletedata(id:any){
    let data=confirm("Are You Sure To Delete Record");
    if(data){
      this.api.deleterecord(id).subscribe((res:any)=>{
        console.log(res);
        this.getstudentallrecord();
      })
    }else{
      this.router.navigate(['/']);
    }
    
  }
}

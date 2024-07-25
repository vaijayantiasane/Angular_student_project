import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addstudent(data:any){
    return this.http.post("http://localhost:3000/student",data);
  }
  getallstudent(){
    return this.http.get("http://localhost:3000/student");
  }
  getonerecord(id:any){
    return this.http.get("http://localhost:3000/student/"+id);
  }
  updateonerecord(id:any,data:any){
    return this.http.put("http://localhost:3000/student/"+id,data)
  }
  deleterecord(id:any){
    return this.http.delete("http://localhost:3000/student/"+id);
  }
}

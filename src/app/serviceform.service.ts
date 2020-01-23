import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class ServiceformService {
  employees: Array<Employee> = [];
  constructor(private _http: HttpClient) { }
  /*url= "/assets/emp.json";

  getEmp():Observable<Employee[]>{
    return this._http.get<Employee[]>(this.url);
  }*/

  save(emp: Employee) {
    this.employees.push(emp);
    // console.log(this.employees);
  }

  getEmp() {
    return this.employees;
  }


  delete(ind) {
    this.employees.splice(ind, 1);
  }
}


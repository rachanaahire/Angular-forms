import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceformService } from '../serviceform.service';
import { Router, ActivatedRoute } from '@angular/router';
import { format } from 'url';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor(private _empService: ServiceformService, private router: Router, private route: ActivatedRoute) { }
  public empId:string;
  ngOnInit() {
    this.empId = this.route.snapshot.paramMap.get('id');
    /*this.reactForm.setValue({
      name: this.empName,
      email: '',
      phone: '',
      department: '',
      timepref: '',
      isemployee:false
  })*/
    //console.log(this.empId)
    if (this.empId && this.empId !== 'null' ) {
      const emp = this._empService.employees[this.empId];
      // console.log(emp);
      this.reactForm.setValue(emp);
    }
  }


  choices = ['IT', 'Sales', 'Marketing'];
  get f() {
    //console.log(this.reactForm.controls)
    return this.reactForm.controls
  }

  reactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')),
    phone: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    timepref: new FormControl('', Validators.required),
    isemployee: new FormControl(null, Validators.required)

  });

  /*onSubmit() {
    console.log(this.reactForm.value)
  }*/

  loadData() {
    this.reactForm.setValue({
      name: 'Bruce Wayne',
      email: 'bruce@gotham.dc',
      phone: 1234567890,
      department: 'Marketing',
      timepref: 'evening',
      isemployee: true
    });
  }

  submit() {
    // const newEmp: Employee= this.reactForm.value;
    // let x =this.reactForm.value
    // localStorage.setItem('hello', JSON.stringify(x));
    if (this.reactForm.valid) {
      if (this.empId !== 'null') {
        this._empService.employees[this.empId] = this.reactForm.value;
      } else {
        this._empService.save(this.reactForm.value);
      }
    }
    this.reactForm.reset();
  }

}

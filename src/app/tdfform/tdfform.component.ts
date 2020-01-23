import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-tdfform',
  templateUrl: './tdfform.component.html',
  styleUrls: ['./tdfform.component.css']
})
export class TdfformComponent implements OnInit {
  choices = ['IT', 'Sales' , 'Marketing'];

  empModel = new Employee('', '', 0 , '', '', true);

  onSubmit() {
    
  }

  constructor() { }

  ngOnInit() {
  }

}

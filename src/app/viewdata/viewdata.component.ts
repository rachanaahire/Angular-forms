import { Component, OnInit } from '@angular/core';
import { ServiceformService } from '../serviceform.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {
  emp = [];
  ngOnInit() {
    // console.warn( localStorage.getItem('hello'))
    this.emp = this._empService.getEmp();
  }
  constructor(private _empService: ServiceformService, private router: Router, private route: ActivatedRoute) { }

  onSelect(ind) {
    this.router.navigate(['/add_data', ind]);
    // this._empService.update(ind);
  }

  onDelete(ind) {
    this._empService.delete(ind);
    // console.log
  }
}

import { Component, OnInit } from '@angular/core';
import { DatasharingService } from '../services/footerservice/datasharing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private ds:DatasharingService) {
    this.ds.setNameOfComponent(this.constructor.name);
  }

  ngOnInit(): void {
   
  }

}

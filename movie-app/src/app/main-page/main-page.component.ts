import { Component, OnInit } from '@angular/core';
import { DatasharingService } from '../services/footerservice/datasharing.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private ds:DatasharingService) { 
    this.ds.setNameOfComponent(this.constructor.name);
  }

  ngOnInit(): void {
  }

}

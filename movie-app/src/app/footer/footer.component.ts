import { Component, Input, OnInit } from '@angular/core';
import { DatasharingService } from '../services/footerservice/datasharing.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input()
  nameOfComponent: string;

  constructor(private ds:DatasharingService) { 
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.nameOfComponent = this.ds.getNameOfComponent();
    console.log(this.nameOfComponent);
  }

}

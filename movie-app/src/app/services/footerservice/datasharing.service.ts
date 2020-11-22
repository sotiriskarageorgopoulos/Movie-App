import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasharingService {
  private nameOfComponent: string;

  setNameOfComponent(name:string){
    this.nameOfComponent = name;
  }

  getNameOfComponent():string {
    return this.nameOfComponent;
  }

  constructor() { 
  }
}

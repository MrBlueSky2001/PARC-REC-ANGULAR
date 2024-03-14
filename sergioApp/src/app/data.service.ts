import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonData: any;

  constructor() { }

  setJsonData(data: any) {
    this.jsonData = data;
  }

  getJsonData() {
    return this.jsonData;
  }
}
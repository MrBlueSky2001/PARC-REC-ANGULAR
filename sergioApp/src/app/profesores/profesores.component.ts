import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrl: './profesores.component.css'
})
export class ProfesoresComponent {
  public jsonData: any;
  public inputIdGet: string = '';
  public url: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private DataService: DataService){

  }

  ngOnInit(){
    this.get();
  }

  get(){
    this.http.get(this.url)
    .subscribe(data => {
      this.DataService.setJsonData(data);
      this.jsonData = this.DataService.getJsonData;
    });
  }

  get3() {
    this.http.get(this.url)
      .subscribe(
        (data: any) => {
          this.DataService.setJsonData(data);
          this.jsonData = this.DataService.getJsonData();
        },
        error => {
          console.error('Error al obtener datos:', error);
        }
      );
  }

  get2(){
    this.http.get(this.url)
    .subscribe(data => {this.jsonData = data;
      this.DataService.setJsonData(this.jsonData);
    });
  }
}

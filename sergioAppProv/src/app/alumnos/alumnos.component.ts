import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataServiceService } from '../data-service.service';
import { PlaceHolderA } from '../interfaces/place-holder';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent implements OnInit {
  alumnos: any[] = [];
  nuevoAlumno: any = {};
  public url: string = "http://localhost:3000/alumnos"

  constructor(private http: HttpClient, private dataService: DataServiceService) { }

  ngOnInit(){
    this.obtenerAlumnos();
  }
  
  obtenerAlumnos(): void {
    this.http.get(this.url)
  }

  agregarAlumno(): void {
    if (this.nuevoAlumno.usuario && this.nuevoAlumno.email && this.nuevoAlumno.edad) {
      const nuevoId = (this.alumnos.length > 0 ? parseInt(this.alumnos[this.alumnos.length - 1].id) : 0) + 1;
      const nuevoAlumno = {
        id: nuevoId.toString(),
        usuario: this.nuevoAlumno.usuario,
        email: this.nuevoAlumno.email,
        edad: this.nuevoAlumno.edad,
        foto: 'https://www.thematicland.com/wp-content/uploads/2021/08/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png' 
      };

      this.alumnos.push(nuevoAlumno);
      this.nuevoAlumno = {}; // Limpiar el formulario
    } else {
      console.log('Por favor, completa todos los campos.');
    }
  }
}
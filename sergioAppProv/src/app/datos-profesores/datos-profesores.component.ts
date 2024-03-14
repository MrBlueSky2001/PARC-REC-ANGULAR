import { Component, Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-datos-profesores',
  templateUrl: './datos-profesores.component.html',
  styleUrl: './datos-profesores.component.css'
})
export class DatosProfesoresComponent {
  @Input() profesorId: string = '';
  @Input() profesorData: any;
  public profesor: any;
  public mostrarCarta: boolean = false;

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    if (this.profesorId) {
      this.profesor = this.dataService.getProfesorById(this.profesorId);
    }
  }

  vistaCartas() {
    this.mostrarCarta = !this.mostrarCarta;
  }
}
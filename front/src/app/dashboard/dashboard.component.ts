import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  precioMaximoActual: number = 0;
  precioMinimoActual: number = 0;
  precioMaximoAnterior: number = 0;
  precioMinimoAnterior: number = 0;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    const startDate = 'YYYY-MM-DDT00:00';
    const endDate = 'YYYY-MM-DDT23:59';

    this.dataService.getData(startDate, endDate)
      .subscribe(
        (response: any) => {
          // Suponiendo que los datos están en la propiedad 'data' del objeto de respuesta
          this.precioMaximoActual = response.data.precioMaximoActual;
          this.precioMinimoActual = response.data.precioMinimoActual;
          this.precioMaximoAnterior = response.data.precioMaximoAnterior;
          this.precioMinimoAnterior = response.data.precioMinimoAnterior;
        },
        (error) => {
          console.error(error);
        }
      );
  }
}

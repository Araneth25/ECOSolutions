import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  precios: number[] = [2];
  mediaAritmetica: number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    const startDate = 'YYYY-MM-DDT00:00';
    const endDate = 'YYYY-MM-DDT23:59';

    this.dataService.getData(startDate, endDate)
      .subscribe(
        (response: any) => {
          this.precios = response.data.precios;
          this.calcularMediaAritmetica();
        },
        (error) => {
          console.error(error);
        }
      );
  }

  mostrarDetalle(valor: number) {
    alert(`El valor seleccionado es: ${valor}`);
  }  

  calcularMediaAritmetica() {
    if (this.precios && this.precios.length > 0) {
      const sumatoria = this.precios.reduce((total, precio) => total + precio, 0);
      this.mediaAritmetica = sumatoria / this.precios.length;
    }
  }
}

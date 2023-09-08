import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  precios: number[] = [];
  mediaAritmetica: number = 0;
  error: string | null = null;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    const startDate = '2023-09-08T00:00';
    const endDate = '2023-09-08T23:59';

    this.dataService.getData(startDate, endDate).subscribe(
      (response: any) => {
        console.log(response);

        if (response && response.included && response.included.length > 0) {
          const preciosData = response.included.find((item: any) => item.type === 'PVPC (€/MWh)');
          const preciosArray = preciosData.attributes.values || [];

          this.precios = preciosArray.map((valueData: any) => valueData.value);

          // Media aritmética
          this.calcularMediaAritmetica();
        } else if (response && response.error && response.error.errors && response.error.errors.length > 0) {
          const errorMessage = response.error.errors[0].detail;
          this.error = `Error en la API: ${errorMessage}`;
        } else {
          this.error = 'La respuesta de la API no contiene datos válidos o no se pudo determinar el error.';
        }
      },
      (error) => {
        console.error(error);
        this.error = 'Hubo un error al cargar los datos desde la API.';
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
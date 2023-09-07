import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // URL de la API
    const url = 'https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=YYYY-MM-DDT00:00&end_date=YYYY-MM-DDT23:59&time_trunc=hour&cached=true';

    this.http.get(url).subscribe((response) => {
      this.data = response;
    });
  }
}


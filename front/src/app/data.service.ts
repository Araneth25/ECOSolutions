import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real';

  constructor(private http: HttpClient) { }

  getData(startDate: string, endDate: string): Observable<any> {
    const apiUrlWithParams = `${this.apiUrl}?start_date=${startDate}&end_date=${endDate}&time_trunc=hour&cached=true&only_target=true`;
    return this.http.get(apiUrlWithParams);
  }
}
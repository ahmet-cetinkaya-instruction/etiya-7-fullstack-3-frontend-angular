import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { GetBrandsListRequest } from '../models/get-brands-list-request';
import { GetBrandsListResponse } from '../models/get-brands-list-response';
// Ortam değişekenlerini kullanırken her zaman "environment" dosyasını kullanacağız.
// Farklı ortamlara göre projeyi çalıştırdığımızda src/environments/environment.ts dosyası ilgili dosya ile değiştirilecektir.

@Injectable({
  providedIn: 'root',
})
export class BrandsMockService {
  // JS'deki varsayılan erişim belirteci public'tir.
  private readonly apiControllerUrl: string = `${environment.API_URL}/brands`;

  constructor(private httpClient: HttpClient) {}

  getList(request: GetBrandsListRequest): Observable<GetBrandsListResponse> {
    return this.httpClient.get<GetBrandsListResponse>(this.apiControllerUrl);
  }
}

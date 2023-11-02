import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { GetBrandsListRequest } from '../models/get-brands-list-request';
import { GetBrandsListResponse } from '../models/get-brands-list-response';
import { BrandListItemDto } from '../models/brand-list-item-dto';
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
    const newRequest: { [key: string]: string } = {
      _page: request.pageIndex.toString(),
      _limit: request.pageSize.toString(),
    };
    if (request.searchByName) newRequest['name_like'] = request.searchByName;

    return this.httpClient
      .get<BrandListItemDto[]>(this.apiControllerUrl, {
        params: newRequest,
      })
      .pipe(
        map((response) => {
          const newResponse: GetBrandsListResponse = {
            pageIndex: request.pageIndex,
            pageSize: request.pageSize,
            count: 10,
            hasNextPage: true,
            hasPreviousPage: false,
            items: response,
          };
          return newResponse;
        })
      );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { GetBrandsListRequest } from '../models/get-brands-list-request';
import { GetBrandsListResponse } from '../models/get-brands-list-response';
import { BrandListItemDto } from '../models/brand-list-item-dto';
import { AddBrandRequest } from '../models/add-brand-request';
import { AddBrandResponse } from '../models/add-brand-response';
import { GetBrandByIdRequest } from '../models/get-brand-by-id-request';
import { GetBrandByIdResponse } from '../models/get-brand-by-id-response';
import { UpdateBrandRequest } from '../models/update-brand-request';
import { UpdateBrandResponse } from '../models/update-brand-response';
import { DeleteBrandRequest } from '../models/delete-brand-request';
import { DeleteBrandResponse } from '../models/delete-brand-response';
// Ortam değişekenlerini kullanırken her zaman "environment" dosyasını kullanacağız.
// Farklı ortamlara göre projeyi çalıştırdığımızda src/environments/environment.ts dosyası ilgili dosya ile değiştirilecektir.

@Injectable({
  providedIn: 'root',
})
export class BrandsMockService {
  // JS'deki varsayılan erişim belirteci public'tir.
  private readonly apiControllerUrl: string = `${environment.API_URL}/brands`;

  constructor(private httpClient: HttpClient) {}

  getById(reqeust: GetBrandByIdRequest): Observable<GetBrandByIdResponse> {
    return this.httpClient.get<GetBrandByIdResponse>(
      `${this.apiControllerUrl}/${reqeust.id}`
    );
  }

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

  add(request: AddBrandRequest): Observable<AddBrandResponse> {
    return this.httpClient.post<AddBrandResponse>(
      this.apiControllerUrl,
      request
    );
  }

  update(request: UpdateBrandRequest): Observable<UpdateBrandResponse> {
    return this.httpClient.put<UpdateBrandResponse>(
      `${this.apiControllerUrl}/${request.id}`,
      request
    );
  }

  delete(request: DeleteBrandRequest): Observable<DeleteBrandResponse> {
    return this.httpClient.delete<DeleteBrandResponse>(
      `${this.apiControllerUrl}/${request.id}`
    );
  }
}

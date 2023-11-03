import { Observable } from 'rxjs';
import { GetBrandByIdRequest } from '../../models/get-brand-by-id-request';
import { GetBrandByIdResponse } from '../../models/get-brand-by-id-response';
import { AddBrandRequest } from '../../models/add-brand-request';
import { AddBrandResponse } from '../../models/add-brand-response';
import { DeleteBrandRequest } from '../../models/delete-brand-request';
import { DeleteBrandResponse } from '../../models/delete-brand-response';
import { GetBrandsListRequest } from '../../models/get-brands-list-request';
import { GetBrandsListResponse } from '../../models/get-brands-list-response';
import { UpdateBrandRequest } from '../../models/update-brand-request';
import { UpdateBrandResponse } from '../../models/update-brand-response';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class BrandsService {
  abstract getById(
    reqeust: GetBrandByIdRequest
  ): Observable<GetBrandByIdResponse>;
  abstract getList(
    request: GetBrandsListRequest
  ): Observable<GetBrandsListResponse>;
  abstract add(request: AddBrandRequest): Observable<AddBrandResponse>;
  abstract update(request: UpdateBrandRequest): Observable<UpdateBrandResponse>;
  abstract delete(request: DeleteBrandRequest): Observable<DeleteBrandResponse>;
}

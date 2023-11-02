import { PageRequest } from 'src/app/core/models/page-request';

export interface GetBrandsListRequest extends PageRequest {
  searchByName?: string;
}

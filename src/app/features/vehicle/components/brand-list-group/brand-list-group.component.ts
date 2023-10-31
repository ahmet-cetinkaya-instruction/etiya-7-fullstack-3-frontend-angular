import { Component, OnInit } from '@angular/core';
import { BrandsMockService } from '../../services/brands-mock.service';
import { GetBrandsListRequest } from '../../models/get-brands-list-request';
import { PageResponse } from 'src/app/core/models/page-response';
import { BrandListItemDto } from '../../models/brand-list-item-dto';

@Component({
  selector: 'app-brand-list-group',
  templateUrl: './brand-list-group.component.html',
  styleUrls: ['./brand-list-group.component.scss'],
})
export class BrandListGroupComponent implements OnInit {
  brandsList!: PageResponse<BrandListItemDto>; // : GetBrandListResponse

  constructor(private brandsService: BrandsMockService) {} // İlerleyen günlerde servisleri de soyutluyor olacağız.

  ngOnInit(): void {
    this.getList({ pageIndex: 0, pageSize: 10 });
  }

  getList(request: GetBrandsListRequest) {
    this.brandsService.getList(request).subscribe((response) => {
      console.log(
        '🚀 ~ file: brand-list-group.component.ts:23 ~ BrandListGroupComponent ~ this.brandsService.getList ~ response:',
        response
      );
      this.brandsList = response;
    });
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() selectedBrandId: number | null = null;

  @Output() selectBrand = new EventEmitter<number | null>();

  constructor(private brandsService: BrandsMockService) {} // İlerleyen günlerde servisleri de soyutluyor olacağız.

  ngOnInit(): void {
    this.getList({ pageIndex: 0, pageSize: 10 });
  }

  getList(request: GetBrandsListRequest) {
    this.brandsService.getList(request).subscribe((response) => {
      this.brandsList = response;
    });
  }

  onBrandSelected(brandId: number | null): void {
    this.selectedBrandId = brandId;

    this.selectBrand.emit(this.selectedBrandId);
  }
}

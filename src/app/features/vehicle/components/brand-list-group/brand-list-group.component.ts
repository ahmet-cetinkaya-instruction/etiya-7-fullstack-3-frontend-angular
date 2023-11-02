import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BrandsMockService } from '../../services/brands-mock.service';
import { GetBrandsListRequest } from '../../models/get-brands-list-request';
import { PageResponse } from 'src/app/core/models/page-response';
import { BrandListItemDto } from '../../models/brand-list-item-dto';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-brand-list-group',
  templateUrl: './brand-list-group.component.html',
  styleUrls: ['./brand-list-group.component.scss'],
})
export class BrandListGroupComponent implements OnInit {
  brandsList!: PageResponse<BrandListItemDto>; // : GetBrandListResponse
  @Input() selectedBrandId: number | null = null;
  searchNameText: string = '';

  @Output() selectBrand = new EventEmitter<number | null>();
  searchNameTextSubject = new Subject<void>();
  TIMEOUT_SEARCH = 2000;

  constructor(private brandsService: BrandsMockService) {} // İlerleyen günlerde servisleri de soyutluyor olacağız.

  ngOnInit(): void {
    this.getList({ pageIndex: 0, pageSize: 10 });
    this.subscribeSearchNameText();
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

  onBrandSearched(): void {
    // this.searchText = (event.target as HTMLInputElement).value; // ngModel ile bağlandığımız için bu satırı kullanmıyoruz.

    // this.getList({
    //   pageIndex: 0,
    //   pageSize: 10,
    //   searchByName: this.searchNameText,
    // });

    this.searchNameTextSubject.next();
  }
  subscribeSearchNameText() {
    this.searchNameTextSubject
      .pipe(debounceTime(this.TIMEOUT_SEARCH))
      .subscribe(() => {
        this.getList({
          pageIndex: 0,
          pageSize: 10,
          searchByName: this.searchNameText,
        });
      });
  }
}

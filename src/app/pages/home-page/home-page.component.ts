import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  // selector: 'app-home-page', // Routing yapısına geçtiğimizde selector'a ihtiyaç kalmayacak.
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  selectedBrandId: number | null = null;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getBrandIdFromQueryParams();
  }

  getBrandIdFromQueryParams(): void {
    this.activatedRoute.queryParams.pipe(take(1)).subscribe((params) => {
      // if (params['brandId']) {
      //   this.selectedBrandId = Number(params['brandId']);
      // } else {
      //   this.selectedBrandId = null;
      // }
      this.selectedBrandId = params['brandId']
        ? Number(params['brandId'])
        : null;
    });
  }

  onBrandSelected(brandId: number | null): void {
    this.selectedBrandId = brandId;

    this.router.navigate([], {
      queryParams: {
        brandId: this.selectedBrandId,
      },
      queryParamsHandling: 'merge',
    });
  }
}

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

@Component({
  templateUrl: './brand-form-page.component.html',
  styleUrls: ['./brand-form-page.component.scss'],
})
export class BrandFormPageComponent implements OnInit {
  brandIdToEdit: number | null = null;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.getBrandIdFromRoute();
  }

  getBrandIdFromRoute() {
    this.activatedRoute.params.pipe(take(1)).subscribe((params) => {
      this.brandIdToEdit = params['brandId'] ? Number(params['brandId']) : null;
    });
  }

  onBrandDeleted() {
    this.router.navigate(['management/brands/add']);
  }
}

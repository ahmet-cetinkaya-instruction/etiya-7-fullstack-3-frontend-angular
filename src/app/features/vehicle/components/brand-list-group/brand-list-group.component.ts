import { Component } from '@angular/core';

interface Brand {
  name: string;
}

@Component({
  selector: 'app-brand-list-group',
  templateUrl: './brand-list-group.component.html',
  styleUrls: ['./brand-list-group.component.scss'],
})
export class BrandListGroupComponent {
  brandsList: Brand[] = [
    {
      name: 'BMW',
    },
    {
      name: 'Mercedes',
    },
    {
      name: 'Audi',
    },
    {
      name: 'VW',
    },
  ];
}

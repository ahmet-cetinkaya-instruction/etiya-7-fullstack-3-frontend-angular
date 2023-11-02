import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrandsMockService } from '../../services/brands-mock.service';
import { AddBrandRequest } from '../../models/add-brand-request';

@Component({
  selector: 'app-brand-form',
  templateUrl: './brand-form.component.html',
  styleUrls: ['./brand-form.component.scss'],
})
export class BrandFormComponent implements OnInit {
  // brandForm: FormGroup = new FormGroup({
  //   name: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(2),
  //   ]),
  //   // description : new FormControl('')
  // });
  brandForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private brandsService: BrandsMockService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.brandForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      // description: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  add() {
    const request: AddBrandRequest = {
      name: this.brandForm.value.name,
      // description: this.brandForm.value.description,
    };
    this.brandsService.add(request).subscribe((response) => {
      console.log(
        '🚀 ~ file: brand-form.component.ts:88 ~ BrandFormComponent ~ this.brandsService.add ~ response',
        response
      );
    });
  }

  onBrandFormSubmitted(): void {
    if (this.brandForm.invalid) {
      alert('Form is invalid.');
      return;
    }

    this.add();
  }
}

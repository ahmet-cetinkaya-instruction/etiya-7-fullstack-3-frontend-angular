import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrandsMockService } from '../../services/brands-mock.service';
import { AddBrandRequest } from '../../models/add-brand-request';
import { UpdateBrandRequest } from '../../models/update-brand-request';
import { DeleteBrandRequest } from '../../models/delete-brand-request';

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
  @Input() brandIdToEdit: number | null = null;

  @Output() brandDeleted = new EventEmitter<void>();

  get isEditForm(): boolean {
    return this.brandIdToEdit !== null;
  }

  constructor(
    private formBuilder: FormBuilder,
    private brandsService: BrandsMockService
  ) {}

  ngOnInit(): void {
    this.createForm();
    if (this.isEditForm) this.getBrandById();
  }

  createForm() {
    this.brandForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      // description: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  getBrandById() {
    this.brandsService
      .getById({ id: this.brandIdToEdit! })
      .subscribe((response) => {
        this.brandForm.patchValue(response);
      });
  }

  add(): void {
    const request: AddBrandRequest = {
      name: this.brandForm.value.name,
      // description: this.brandForm.value.description,
    };
    this.brandsService.add(request).subscribe((_) => {
      alert('Brand added.');
    });
  }

  update(): void {
    const request: UpdateBrandRequest = {
      id: this.brandIdToEdit!,
      name: this.brandForm.value.name,
      // description: this.brandForm.value.description,
    };
    this.brandsService.update(request).subscribe((response) => {
      this.brandForm.patchValue(response);
      alert('Brand updated.');
    });
  }

  delete(): void {
    const request: DeleteBrandRequest = {
      id: this.brandIdToEdit!,
    };
    this.brandsService.delete(request).subscribe((_) => {
      alert('Brand deleted.');
      this.brandDeleted.emit();
    });
  }

  onBrandFormSubmitted(): void {
    if (this.brandForm.invalid) {
      alert('Form is invalid.');
      return;
    }

    if (this.isEditForm) this.update();
    else this.add();
  }

  onBrandDeleted(): void {
    if (!this.isEditForm) return;
    if (!confirm('Are you sure you want to delete this brand?')) return;

    this.delete();
  }
}

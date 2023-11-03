import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddBrandRequest } from '../../models/add-brand-request';
import { UpdateBrandRequest } from '../../models/update-brand-request';
import { DeleteBrandRequest } from '../../models/delete-brand-request';
import { BrandsService } from '../../services/abstracts/brands-service';

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
  isLoading = false;

  @Output() brandDeleted = new EventEmitter<void>();

  get isEditForm(): boolean {
    return this.brandIdToEdit !== null;
  }

  constructor(
    private formBuilder: FormBuilder,
    private brandsService: BrandsService
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
    this.isLoading = true;

    const request: AddBrandRequest = {
      name: this.brandForm.value.name,
      // description: this.brandForm.value.description,
    };
    this.brandsService.add(request).subscribe({
      next: (_) => {
        alert('Brand added.');

        this.isLoading = false;
      },
      error: (error) => {
        alert(error.message);

        this.isLoading = false;
      },
    });
  }

  update(): void {
    this.isLoading = true;

    const request: UpdateBrandRequest = {
      id: this.brandIdToEdit!,
      name: this.brandForm.value.name,
      // description: this.brandForm.value.description,
    };
    this.brandsService.update(request).subscribe({
      next: (response) => {
        this.brandForm.patchValue(response);
        alert('Brand updated.');

        this.isLoading = false;
      },
      error: (error) => {
        alert(error.message);

        this.isLoading = false;
      },
    });
  }

  delete(): void {
    this.isLoading = true;

    const request: DeleteBrandRequest = {
      id: this.brandIdToEdit!,
    };
    this.brandsService.delete(request).subscribe({
      next: (_) => {
        alert('Brand deleted.');

        this.isLoading = false;
        this.brandDeleted.emit();
      },
      error: (error) => {
        alert(error.message);

        this.isLoading = false;
      },
    });
  }

  onBrandFormSubmitted(): void {
    if (this.isLoading) return;
    if (this.brandForm.invalid) {
      alert('Form is invalid.');
      return;
    }

    if (this.isEditForm) this.update();
    else this.add();
  }

  onBrandDeleted(): void {
    if (this.isLoading) return;
    if (!this.isEditForm) return;
    if (!confirm('Are you sure you want to delete this brand?')) return;

    this.delete();
  }
}

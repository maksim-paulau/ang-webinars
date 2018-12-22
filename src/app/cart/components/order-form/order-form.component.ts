import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  @Input() products: CartItem[];
  @Input() summaryPrice: number;

  @Output() orderSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();

  orderForm: FormGroup;

  private validationMessages = {
    name: {
      required: 'Please enter your name'
    },
    phones: {
      required: 'Please enter your phone',
      pattern: 'Please enter correct phone number'
    }
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  onSubmit() {
    this.orderSubmit.emit(this.orderForm.value);
  }

  onCancel() {
    this.cancel.emit();
  }

  onAddPhone(): void {
    this.phones.push(this.buildPhone());
  }

  onRemovePhone(index): void {
    this.phones.removeAt(index);
  }

  get phones(): FormArray {
    return <FormArray>this.orderForm.get('phones');
  }

  getValidationMessages(controlName: string, index?: number): Array<string>[] {
    let control = this.orderForm.get(controlName);
    if (index !== undefined) {
      control = (<FormArray>control).controls[index];
    }
    return control.errors ? Object.keys(control.errors).map(k => this.validationMessages[controlName][k]) : [];
  }

  private buildForm(): void {
    this.orderForm = this.fb.group({
      name: new FormControl('', { validators: [Validators.required] }),
      phones: this.fb.array([this.buildPhone()]),
      delivery: new FormControl(false),
      address: this.fb.group({
        city: new FormControl(),
        street: new FormControl(),
        building: new FormControl(),
        apartment: new FormControl()
      })
    });
  }

  private buildPhone(): FormControl {
    return new FormControl('', {validators: [Validators.required, Validators.pattern('[\+0-9\- \(\)]{7,20}')]});

  }
}

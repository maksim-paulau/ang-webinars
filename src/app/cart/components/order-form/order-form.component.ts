import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  @Input() products: CartItem[];
  @Input() summaryPrice: number;

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();

  customer: any;

  constructor() {}

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.submit.emit(form.value);
  }

  onCancel() {
    this.cancel.emit();
  }
}

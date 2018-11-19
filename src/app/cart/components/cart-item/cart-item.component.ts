import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../../products/models/product.interface';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() product;

  @Output() remove: EventEmitter<IProduct> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onRemove() {
    this.remove.emit(this.product);
  }
}

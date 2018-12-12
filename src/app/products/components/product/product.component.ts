import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../models/product.interface';
import { ProductModel } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductModel;

  @Output() addToCart: EventEmitter<IProduct> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddToCart() {
    this.addToCart.emit(this.product);
  }
}

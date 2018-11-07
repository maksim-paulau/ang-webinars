import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductCategory } from '../enums/product-category.enum';
import { IProduct } from '../interfaces/product';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: IProduct; 
  @Input() showAddToCartBtn: boolean = true; 

  @Output() addToCart: EventEmitter<IProduct> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddToCart() {
    this.addToCart.emit(this.product)
  }
}

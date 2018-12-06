import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../products/services/products.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

  onDelete(id: number): void {
    this.productsService.deleteProduct(id);
  }
}

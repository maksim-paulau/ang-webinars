import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductModel } from '../models/product';
import { AppSettingsService } from 'src/app/core/services/app-settings.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsPromiseService {

  constructor(
    private http: HttpClient,
    private appSettings: AppSettingsService) {
    }

  getProducts(): Promise<ProductModel[]> {
    return this.http.get(this.appSettings.currentSettings.productsUrl)
      .toPromise()
      .then(response => <ProductModel[]>response);
  }

  getById(id: number): Promise<ProductModel> {
    const url = `${this.appSettings.currentSettings.productsUrl}/${id}`;

    return this.http
      .get(url)
      .toPromise()
      .then(response => <ProductModel>response);
  }

  updateProduct(product: ProductModel): Promise<ProductModel> {
    const url = `${this.appSettings.currentSettings.productsUrl}/${product.id}`,
      body = JSON.stringify(product),
      options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      };

    return this.http
      .put(url, body, options)
      .toPromise()
      .then(response => <ProductModel>response);
  }

  createProduct(product: ProductModel): Promise<ProductModel> {
    const url = this.appSettings.currentSettings.productsUrl,
      body = JSON.stringify(product),
      options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

    return this.http
      .post(url, body, options)
      .toPromise()
      .then(response => <ProductModel>response);
  }

  deleteProduct(id: number): Promise<any> {
    const url = `${this.appSettings.currentSettings.productsUrl}/${id}`;

    return (
      this.http
        .delete(url)
        .toPromise()
    );
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemComponent } from './cart-item.component';
import { CartItem } from '../../models/cart-item';
import { ProductCategory } from 'src/app/products/product-category.enum';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;
  const expectedProduct = new CartItem(1, 'test', 'test descr', 1, true, ProductCategory.unknown, [], 1);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    component.product = expectedProduct;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

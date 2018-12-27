import { CartService } from './cart.service';
import { LocalStorageService } from 'src/app/core/services';
import { CartItem } from '../models/cart-item';

describe('CartService', () => {
    let service: CartService;

    it('addProduct should add product to cart', () => {
        const lsServiceMock = {
            getItem(key: string) {
                return '[]';
            },
            setItem(key: string, value: any) {}
        };
        service = new CartService(lsServiceMock as LocalStorageService);
        const spy = spyOn(lsServiceMock, 'setItem');

        service.addProduct(new CartItem(1, null, null, 1, null, null, null, 1));

        expect(service.productsQuantity).toBe(1);
        expect(spy.calls.count()).toBe(1);
    });

    it('removeProduct should remove product from cart', () => {
        const lsServiceMock = {
            getItem(key: string) {
                return '[{"id": 1, "quantity":1}]';
            },
            setItem(key: string, value: any) {}
        };
        service = new CartService(lsServiceMock as LocalStorageService);
        const spy = spyOn(lsServiceMock, 'setItem');

        service.removeProduct(new CartItem(1, null, null, 1, null, null, null, 1));

        expect(service.productsQuantity).toBe(0);
        expect(spy.calls.count()).toBe(1);
    });

    it('clear should remove all products from cart', () => {
        const lsServiceMock = {
            getItem(key: string) {
                return '[{"id": 1, "quantity":1}]';
            },
            setItem(key: string, value: any) {}
        };
        service = new CartService(lsServiceMock as LocalStorageService);
        const spy = spyOn(lsServiceMock, 'setItem');

        service.clear();

        expect(service.productsQuantity).toBe(0);
        expect(spy.calls.count()).toBe(1);
    });
});

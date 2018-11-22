import { IProduct } from '../../products/models/product.interface';
import { ProductCategory } from '../../products/product-category.enum';

export class CartItem implements IProduct {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public isAvailable: boolean,
        public category: ProductCategory,
        public tags: string[],

        public quantity: number
    ) {}
}

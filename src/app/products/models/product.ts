import { IProduct } from './product.interface';
import { ProductCategory } from '../product-category.enum';

export class ProductModel implements IProduct {
    constructor(
        public id: number = null,
        public name: string = '',
        public description: string = '',
        public price: number = 0,
        public isAvailable: boolean = false,
        public category: ProductCategory = 0,
        public tags: string[] = [],
        ) {
        this.categoryName = ProductCategory[category];
    }

    categoryName: string;
}

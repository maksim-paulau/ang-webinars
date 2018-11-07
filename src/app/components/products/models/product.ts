import { IProduct } from "../interfaces/product";
import { ProductCategory } from "../enums/product-category.enum";

export class ProductModel implements IProduct{
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public isAvailable: boolean,
        public category: ProductCategory,
        public tags: string[]) {
    }
}

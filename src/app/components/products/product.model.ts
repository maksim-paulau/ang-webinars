import { IProduct } from "./product";
import { ProductCategory } from "./product-category.enum";

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

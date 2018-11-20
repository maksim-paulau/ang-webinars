import { IProduct } from "./product.interface";
import { ProductCategory } from "../product-category.enum";

export class ProductModel implements IProduct{
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public isAvailable: boolean,
        public category: ProductCategory,
        public tags: string[],
        ) {
        this.categoryName = ProductCategory[category];
    }

    categoryName: string;
}

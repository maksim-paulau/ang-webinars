import { IProduct } from "../interfaces/product";
import { ProductCategory } from "../enums/product-category.enum";

export class ProductModel implements IProduct{
    name: string;    description: string;
    price: number;
    isAvailable: boolean;
    category: ProductCategory;
    tags: string[];
}

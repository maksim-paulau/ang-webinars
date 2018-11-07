import { ProductCategory } from "./product-category.enum";

export interface IProduct {
    name: string;
    description: string;
    price: number;
    isAvailable: boolean;
    category: ProductCategory;
    tags: string[];
}

import { CartItem } from './cart-item';

export class Order {
    constructor(
        public id: number,
        public clientName: string,
        public clientPhoneNumber: string,
        public products: CartItem[],
        public summaryPrice: number,
        public done: boolean = false
    ) {}
}

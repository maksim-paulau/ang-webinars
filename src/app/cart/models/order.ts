import { CartItem } from './cart-item';

export class Order {
    constructor(
        public id: number,
        public clientName: string,
        public clientPhoneNumbers: string[],
        public products: CartItem[],
        public summaryPrice: number,
        public done: boolean = false
    ) {}
}

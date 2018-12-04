1. Implemented CartFeatureArea, ProductsFeatureArea, AdminFeatureArea
2. Added ProductDetails page with the using of named router-outlet for displaying a feedback(see \src\app\products\components\product-details\product-details.component.html, \src\app\products\products-routing.module.ts) 
3. Added possibility to make order for buying the products from the cart (see \src\app\cart\components\cart-list\cart-list.component.ts) with the using of route extra-parameter
4. Implemented admin panel with possibilities to manage products and orders
5. Added using of localStorage to store orders and cart items (see \src\app\cart\services)
6. Added AuthGuard, that protects the Admin panel and lets to dynamically load the Admin module
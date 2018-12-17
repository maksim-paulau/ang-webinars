import { createFeatureSelector, createSelector } from '@ngrx/store';

import { productAdapter, ProductsState } from './products.state';
import { getRouterState } from './../router/router.selectors';
import { ProductModel } from './../../../products/models/product';


export const getProductsState = createFeatureSelector<ProductsState>('products');

export const {
    selectEntities: getProductsEntities,
    selectAll: getProductsData
} = productAdapter.getSelectors(getProductsState);

export const getProductsError = createSelector(getProductsState, (state: ProductsState) => state.error);
export const getProductsLoaded = createSelector(getProductsState, (state: ProductsState) => state.loaded);
export const getSelectedProductByUrl = createSelector(
    getProductsEntities,
    getRouterState,
    (products, router): ProductModel => {
        const productID = router.state.params.id || router.state.state.root.firstChild.params.id;
        if (productID) {
            return products[productID];
        } else {
            return new ProductModel();
        }
});

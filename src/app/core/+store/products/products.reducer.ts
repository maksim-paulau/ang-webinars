import { ProductsActionTypes, ProductsActions } from './products.actions';
import { productAdapter, ProductsState, initialProductsState } from './products.state';
import { ProductModel } from './../../../products/models/product';

export function productsReducer(
  state = initialProductsState,
  action: ProductsActions
): ProductsState {
  console.log(`Reducer: Action came in! ${action.type}`);

  switch (action.type) {

    case ProductsActionTypes.GET_PRODUCTS: {
      return {
        ...state,
        loading: true
      };
    }

    case ProductsActionTypes.GET_PRODUCTS_SUCCESS: {
      const products = [...<Array<ProductModel>>action.payload];

      return productAdapter.addAll(products, {...state, loading: false, loaded: true});
    }


    case ProductsActionTypes.GET_PRODUCTS_ERROR: {
      const error = action.payload;
      return {
        ...state,
        loading: false,
        loaded: false,
        error
      };
    }

    case ProductsActionTypes.CREATE_PRODUCT_SUCCESS: {
      const product = { ...<ProductModel>action.payload };

      return productAdapter.addOne(product, state);
    }

    case ProductsActionTypes.UPDATE_PRODUCT_SUCCESS: {
      const product = { ...<ProductModel>action.payload };

      return productAdapter.updateOne({
          id: product.id,
          changes: product
      }, state);
    }

    case ProductsActionTypes.DELETE_PRODUCT_SUCCESS: {
      const id = action.payload;
      return productAdapter.removeOne(id, state);
    }

    case ProductsActionTypes.CREATE_PRODUCT_ERROR:
    case ProductsActionTypes.UPDATE_PRODUCT_ERROR:
    case ProductsActionTypes.DELETE_PRODUCT_ERROR: {
      const error = action.payload;
      return {
        ...state,
        error
      };
    }

    default: {
      return state;
    }
  }
}

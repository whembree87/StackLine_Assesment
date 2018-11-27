import { combineReducers } from 'redux';

import ProductsReducer from './reducer_products';

const rootReducer = combineReducers({
  productData : ProductsReducer
});

export default rootReducer;

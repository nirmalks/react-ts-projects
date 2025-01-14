import { CartItem } from "./CartItem";

export const LOADING_ACTION = 'LOADING';
export const VIEW_ITEMS_ACTION = 'VIEW_ITEMS';
export const INCREASE_QUANTITY_ACTION = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY_ACTION = 'DECREASE_QUANTITY';
export const DELETE_ITEM_ACTION = 'DELETE_ITEM';
export const GET_TOTAL_ACTION = 'GET_TOTAL';
export const CLEAR_CART_ACTION = 'CLEAR_CART';
export const TOGGLE_QUANTITY_ACTION = 'TOGGLE_QUANTITY';

interface ClearCartAction {
  type: typeof CLEAR_CART_ACTION;
}
interface DeleteItemAction {
  type: typeof DELETE_ITEM_ACTION;
  payload: { id: number }
}
interface IncreaseQuantityAction {
  type: typeof INCREASE_QUANTITY_ACTION;
  payload: { id: number };
}
interface DecreaseQuantityAction {
  type: typeof DECREASE_QUANTITY_ACTION;
  payload: { id: number };
}
interface GetTotalAction {
  type: typeof GET_TOTAL_ACTION;
}

interface LoadingAction {
  type: typeof LOADING_ACTION;
}

interface ViewItemsAction {
  type: typeof VIEW_ITEMS_ACTION;
  payload: CartItem[];
}

export type Action =
  | ClearCartAction
  | DeleteItemAction
  | IncreaseQuantityAction
  | DecreaseQuantityAction
  | GetTotalAction
  | LoadingAction
  | ViewItemsAction;
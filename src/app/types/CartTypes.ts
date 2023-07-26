export enum CartActionType {
  add_item,
  remove_item,
  increase_quantity,
  decrease_quantity,
  empty_cart,
}

export interface Cart {
  [key: string]: {
    productImageUrl: string;
    quantity: number;
    price: number;
  };
}

export interface CartAction {
  type: CartActionType;
  productName: string;
  productImageUrl: string;
  quantity: number;
  price: number;
}

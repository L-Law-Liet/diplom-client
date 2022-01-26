import {Product} from "./product.model";

export class Cart {
  constructor(
    public id: number,
    public count: number,
    public product_id: number,
    public user_id: number,
    public product: Product,
  ) {
  }
}

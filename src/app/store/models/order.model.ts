import {OrderItem} from "./order-item.model";

export class Order {
  constructor(
    public id: number,
    public total: number,
    public order_items: OrderItem[],
  ) {
  }
}

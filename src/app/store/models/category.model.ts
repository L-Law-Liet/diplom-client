import {Product} from "./product.model";

export class Category {
  constructor(
    public id: number,
    public name: string,
    public created_at: string,
    public updated_at: string,
    public products: Product[],
  ) {}
}

import {Category} from "./category.model";
import {Media} from "../../shared/models/media.model";

export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public description: string,
    public created_at: string,
    public updated_at: string,
    public images: [],
    public image: string,
    public category?: Category,
  ) {}
}

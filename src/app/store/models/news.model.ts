import {Category} from "./category.model";

export class News {
  constructor(
    public id: number,
    public title: string,
    public body: string,
    public created_at: string,
    public updated_at: string,
    public media: {[link: string]: string},
  ) {}
}

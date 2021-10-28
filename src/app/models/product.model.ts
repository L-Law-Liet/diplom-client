export class Product {
  constructor(
    public id: number,
    public name: string,
    public image: string,
    public price: number,
    public description: string,
    public created_at: string,
    public updated_at: string,
  ) {}
}

export class OrderItem {
  constructor(
    public id: number,
    public name: string,
    public count: number,
    public cost: number,
    public created_at: string,
  ) {
  }
}

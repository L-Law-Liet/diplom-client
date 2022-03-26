export class DiscountStatus {
  constructor(
    public id: number,
    public name: string,
    public color: string,
    public min: number,
    public discount: number,
    public expires: string,
  ) {}
}

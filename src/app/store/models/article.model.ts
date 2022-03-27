export class Article {
  constructor(
    public id: number,
    public title: string,
    public body: string,
    public image: string,
    public created_at: string,
  ) {}
}

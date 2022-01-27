import {Media} from "./media.model";

export class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public media: Media,
    public admin: boolean,
    public phone: string,
  ) {}
}

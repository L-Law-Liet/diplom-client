import {Media} from "./media.model";

export class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public image: string,
    public admin: boolean,
    public phone: string,
  ) {}
}

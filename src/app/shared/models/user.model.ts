import {Media} from "./media.model";
import {DiscountStatus} from "../../store/models/discount-status.model";

export class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public image: string,
    public admin: boolean,
    public phone: string,
    public card: DiscountStatus,
  ) {}
}

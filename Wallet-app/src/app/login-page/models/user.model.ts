import {SpendingModel} from "./spending.model";
import {ProfitModel} from './profit.model';

export interface UserModel {
  id?: number;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
  spending?: SpendingModel[];
  profit?: ProfitModel[];
}

export enum UserEnum {
  email = "email",
  password = "password",
  confirmPassword = "confirmPassword",
  firstName = "firstName",
  lastName = "lastName",
}

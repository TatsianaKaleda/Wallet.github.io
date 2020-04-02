import {SpendingModel} from "./spendingModel";

export interface UserModel {
  id?: number;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
  spending?: SpendingModel[];
}

export enum UserEnum {
  email = "email",
  password = "password",
  confirmPassword = "confirmPassword",
  firstName = "firstName",
  lastName = "lastName",
}

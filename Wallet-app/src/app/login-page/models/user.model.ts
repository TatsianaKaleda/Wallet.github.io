export interface UserModel {
  id?: number;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
}

export enum UserEnum {
  email = "email",
  password = "password",
  confirmPassword = "confirmPassword",
  firstName = "firstName",
  lastName = "lastName",
}

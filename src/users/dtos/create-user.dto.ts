import { ACCOUNT_STATUS, ACCOUNT_TYPE  } from "src/constants/db.constant";
import { Address } from "../../schemas/common/address.schema";

export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  age: string;
  status: ACCOUNT_STATUS;
  accountType: ACCOUNT_TYPE;
  social: string[]
  isEmailVerified: boolean
  metadata: any;
  address: Address
}
import Address from "./address.interface";

export default interface User {
  firstName: string;
  lastName: string;
  profile: string;
  address: Address;
}

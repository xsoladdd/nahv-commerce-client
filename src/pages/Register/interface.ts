export interface RegisterProps {}

export interface RegisterInterface {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export interface MessageState {
  variant: "danger" | "success";
  message: string;
}

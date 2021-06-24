import { LoginInterface } from "src/pages/Login/interface";
import { RegisterInterface } from "src/pages/Register/interface";

export interface registerParameters {
  data: RegisterInterface;
}

export interface loginParameters {
  data: LoginInterface;
}

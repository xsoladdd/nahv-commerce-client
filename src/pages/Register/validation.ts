import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .required(`First name is required`)
    .min(2, "Too Short!")
    .max(20, "Too Long!"),
  middleName: Yup.string(),
  lastName: Yup.string()
    .required(`Last name is required`)
    .min(2, "Too Short!")
    .max(20, "Too Long!"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(15, "Too Long!")
    .required(`Password is required`),
  repeatPassword: Yup.string()
    .min(8, "Too Short!")
    .max(15, "Too Long!")
    .required(`Password is required`)
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  email: Yup.string().email("Invalid email").required(`Email is required`),
});

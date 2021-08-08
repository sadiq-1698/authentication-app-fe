import * as Yup from "yup";

export const RegisterFormSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string().required("Password required")
});

export const RegisterInitialValues = {
  email: "",
  password: ""
};

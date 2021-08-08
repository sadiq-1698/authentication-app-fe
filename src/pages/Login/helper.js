import * as Yup from "yup";

export const LoginFormSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string().required("Password required")
});

export const LoginInitialValues = {
  email: "",
  password: ""
};

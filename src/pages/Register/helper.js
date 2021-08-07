import * as Yup from "yup";

export const RegisterFormSchema = Yup.object({
  email: Yup.string().required("Email required"),
  password: Yup.string().required("Password required")
});

export const RegisterInitialValues = () => {
  return {
    email: "",
    password: ""
  };
};

import * as Yup from "yup";

export const LoginFormSchema = Yup.object({
  email: Yup.string().required("Email required"),
  password: Yup.string().required("Password required")
});

export const LoginInitialValues = () => {
  return {
    email: "",
    password: ""
  };
};

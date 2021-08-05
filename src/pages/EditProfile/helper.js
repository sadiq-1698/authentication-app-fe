import * as Yup from "yup";

export const appendValuesToFormData = (values, formData) => {
  Object.entries(values).forEach(([key, value]) => {
    if (value.toString().trim().length > 0) {
      formData.append(key, value);
    }
  });
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const EditProfileFormSchema = Yup.object({
  fullName: Yup.string().required("Field required"),
  userBio: Yup.string(),
  phone: Yup.string()
    .required("Phone number required")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "Must be of 10 digits")
    .max(10, "Maximum 10 digits"),
  email: Yup.string().required("Email required"),
  password: Yup.string().required("Password required"),
  profilePhoto: Yup.mixed()
});

export const EditProfileInitialValues = () => {
  return {
    fullName: "",
    userBio: "",
    phone: "",
    email: "",
    password: "",
    profilePhoto: ""
  };
};

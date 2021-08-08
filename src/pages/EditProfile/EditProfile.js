import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useHistory } from "react-router-dom";

import { updateUser } from "../../api/user";

import NoProfilePic from "../../static/images/noProfilePic.svg";

import { useAuth } from "../../contexts/authContext";

import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import TopBar from "../../components/TopBar/TopBar";
import FieldError from "../../components/FieldError/FieldError";

import {
  appendValuesToFormData,
  EditProfileInitialValues,
  EditProfileFormSchema
} from "./helper";

import "./styles.css";

const EditProfile = () => {
  const { getUser, setUser } = useAuth();
  const userInfo = getUser();

  const [previewImg, setPreviewImg] = useState(
    userInfo?.profilePhoto || NoProfilePic
  );

  const history = useHistory();

  const handleSubmitProfileData = async (values, actions) => {
    const formData = new FormData();
    appendValuesToFormData(values, formData);
    const res = await updateUser(formData, userInfo.authToken);
    const { data: userData, statusCode } = res.data;
    if (statusCode === 200) {
      setUser(userData);
      history.push("/");
    }
    actions.setSubmitting(false);
  };

  return (
    <div>
      <div className="topbar-container">
        <TopBar />
      </div>

      <div className="back-btn-container">
        <a
          href="/"
          onClick={e => {
            e.preventDefault();
            history.goBack();
          }}
        >
          &lt;&nbsp;&nbsp;Back
        </a>
      </div>

      <Formik
        initialValues={EditProfileInitialValues(getUser)}
        validationSchema={EditProfileFormSchema}
        onSubmit={handleSubmitProfileData}
      >
        {({ touched, errors, isSubmitting, setFieldValue, submitForm }) => {
          return (
            <Form>
              <div className="profile-details-box">
                <div className="profile-box-item main space-between">
                  <div className="left">
                    <p className="profile">Change Info</p>
                    <p className="visibility-msg">
                      Changes will be reflected to every services
                    </p>
                  </div>
                </div>

                <label htmlFor="file">
                  <div className="change-photo-container">
                    <label htmlFor="file-upload" className="change-btn">
                      <ProfileImage size={72} image={previewImg} />

                      <p>CHANGE PHOTO</p>
                    </label>
                    <input
                      type="file"
                      id="file-upload"
                      name="profilePhoto"
                      accept="image/*"
                      onChange={e => {
                        setFieldValue("profilePhoto", e.target.files[0]);
                        setPreviewImg(URL.createObjectURL(e.target.files[0]));
                      }}
                    />
                  </div>
                </label>

                <div className="profile-box-input sub">
                  <Field
                    as={InputField}
                    name="name"
                    variant
                    label="Name"
                    placeholder="Enter your name..."
                  />
                  {touched.name && errors.name && (
                    <FieldError>{errors.name}</FieldError>
                  )}
                </div>

                <div className="profile-box-input sub">
                  <Field
                    as={InputField}
                    name="bio"
                    variant
                    label="Bio"
                    placeholder="Enter your bio..."
                  />
                  {touched.bio && errors.bio && (
                    <FieldError>{errors.bio}</FieldError>
                  )}
                </div>

                <div className="profile-box-input sub">
                  <Field
                    as={InputField}
                    name="phone"
                    variant
                    label="Phone"
                    placeholder="Enter your phone..."
                    type="number"
                  />
                  {touched.phone && errors.phone && (
                    <FieldError>{errors.phone}</FieldError>
                  )}
                </div>

                <div className="profile-box-input sub">
                  <Field
                    as={InputField}
                    name="email"
                    variant
                    label="Email"
                    placeholder="Enter your email..."
                    type="email"
                  />
                  {touched.email && errors.email && (
                    <FieldError>{errors.email}</FieldError>
                  )}
                </div>

                <div className="profile-box-input sub">
                  <Field
                    as={InputField}
                    name="password"
                    variant
                    label="Password"
                    placeholder="Enter your password..."
                    type="password"
                  />
                  {touched.password && errors.password && (
                    <FieldError>{errors.password}</FieldError>
                  )}
                </div>

                <div className="profile-box-input sub">
                  <Button
                    text="Save"
                    loading={isSubmitting}
                    type="submit"
                    onClick={submitForm}
                  />
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default EditProfile;

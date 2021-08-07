import { Formik, Field } from "formik";

import {
  githubAuthProvider,
  googleAuthProvider
} from "../../firebase/authMethods";
import socialMediaAuth from "../../firebase/service-auth";

import DevChallengesLogo from "../../static/images/devchallenges.svg";

import { loginUser } from "../../api/user";

import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import SocialIcon, {
  GoogleIcon,
  GithubIcon
} from "../../components/SocialIcon/SocialIcon";

import { ICONS } from "../../globals/constants";

import "./styles.css";
import { LoginFormSchema, LoginInitialValues } from "./helper";
import FieldError from "../../components/FieldError/FieldError";

const Login = () => {
  const handleSocialProfileLogin = async provider => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };

  const handleSubmit = async (values, actions) => {
    console.log("jinglis", values);
    const res = await loginUser(values);
    console.log(res);
    actions.setSubmitting(false);
  };

  return (
    <div className="signup-page">
      <div className="signup-box">
        <img
          src={DevChallengesLogo}
          alt="dev-challenges-logo"
          className="dev-ch-logo"
        />

        <p className="login-msg">Login</p>

        <Formik
          initialValues={LoginInitialValues}
          validationSchema={LoginFormSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched, submitForm }) => {
            return (
              <>
                <div className="input-wrapper">
                  <Field
                    as={InputField}
                    iconPrefix
                    icon={ICONS.MAIL}
                    placeholder="Email"
                    name="email"
                  />
                  {touched.email && errors.email && (
                    <FieldError>{errors.email}</FieldError>
                  )}
                </div>

                <div className="input-wrapper">
                  <Field
                    as={InputField}
                    iconPrefix
                    icon={ICONS.LOCK}
                    placeholder="Password"
                    name="password"
                    type="password"
                  />
                  {touched.password && errors.password && (
                    <FieldError>{errors.password}</FieldError>
                  )}
                </div>

                <div className="btn-spacing">
                  <Button
                    text="Login"
                    wide
                    type="submit"
                    loading={isSubmitting}
                    onClick={submitForm}
                  />
                </div>
              </>
            );
          }}
        </Formik>

        <p className="continue-msg">or continue with these social profile</p>

        <div className="social-profile-container">
          <SocialIcon
            onClick={() => handleSocialProfileLogin(googleAuthProvider)}
          >
            <GoogleIcon />
          </SocialIcon>
          <SocialIcon
            onClick={() => handleSocialProfileLogin(githubAuthProvider)}
          >
            <GithubIcon />
          </SocialIcon>
        </div>

        <p className="signedup-msg">
          Don’t have an account yet? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

import { useHistory } from "react-router-dom";

import {
  githubAuthProvider,
  googleAuthProvider
} from "../../firebase/authMethods";
import socialMediaAuth from "../../firebase/service-auth";

import DevChallengesLogo from "../../static/images/devchallenges.svg";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import SocialIcon, {
  GoogleIcon,
  GithubIcon
} from "../../components/SocialIcon/SocialIcon";
import { ICONS } from "../../globals/constants";

import "./styles.css";
import { Formik, Field } from "formik";
import { RegisterInitialValues, RegisterFormSchema } from "./helper";
import FieldError from "../../components/FieldError/FieldError";
import { registerUser } from "../../api/user";

const Register = () => {
  const history = useHistory();

  const handleSocialProfileRegister = async provider => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };

  const handleSubmit = async (values, actions) => {
    const res = await registerUser(values);
    let { statusCode } = res.data;
    if (statusCode === 200) history.push("/login");
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

        <p className="join-msg">
          Join thousands of learners from around the world
        </p>

        <p className="desc-msg">
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>

        <Formik
          initialValues={RegisterInitialValues}
          validationSchema={RegisterFormSchema}
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
                    type="password"
                    as={InputField}
                    iconPrefix
                    icon={ICONS.LOCK}
                    placeholder="Password"
                    name="password"
                  />
                  {touched.password && errors.password && (
                    <FieldError>{errors.password}</FieldError>
                  )}
                </div>

                <div className="btn-spacing">
                  <Button
                    text="Start coding now"
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
            onClick={() => handleSocialProfileRegister(googleAuthProvider)}
          >
            <GoogleIcon />
          </SocialIcon>
          <SocialIcon
            onClick={() => handleSocialProfileRegister(githubAuthProvider)}
          >
            <GithubIcon />
          </SocialIcon>
        </div>

        <p className="signedup-msg">
          Adready a member? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;

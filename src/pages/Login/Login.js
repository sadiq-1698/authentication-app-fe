import DevChallengesLogo from "../../static/images/devchallenges.svg";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import SocialIcon, {
  GoogleIcon,
  GithubIcon
} from "../../components/SocialIcon/SocialIcon";
import { MAIL_ICON, LOCK_ICON } from "../../globals/constants";

import "./styles.css";

const Login = () => {
  return (
    <div className="signup-page">
      <div className="signup-box">
        <img
          src={DevChallengesLogo}
          alt="dev-challenges-logo"
          className="dev-ch-logo"
        />

        <p class="login-msg">Login</p>

        <div className="input-wrapper">
          <InputField icon={MAIL_ICON} iconPrefix placeholder="Email" />
        </div>

        <div className="input-wrapper">
          <InputField icon={LOCK_ICON} iconPrefix placeholder="Password" />
        </div>

        <div class="btn-spacing">
          <Button text="Login" wide />
        </div>

        <p className="continue-msg">or continue with these social profile</p>

        <div className="social-profile-container">
          <SocialIcon onClick={() => {}}>
            <GithubIcon />
          </SocialIcon>
          <SocialIcon onClick={() => {}}>
            <GoogleIcon />
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

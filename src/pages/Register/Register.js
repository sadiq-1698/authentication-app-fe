import DevChallengesLogo from "../../static/images/devchallenges.svg";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import SocialIcon, {
  GoogleIcon,
  GithubIcon
} from "../../components/SocialIcon/SocialIcon";
import { MAIL_ICON, LOCK_ICON } from "../../globals/constants";

import "./styles.css";

const Register = () => {
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

        <div className="input-wrapper">
          <InputField icon={MAIL_ICON} iconPrefix placeholder="Email" />
        </div>

        <div className="input-wrapper">
          <InputField icon={LOCK_ICON} iconPrefix placeholder="Password" />
        </div>

        <div class="btn-spacing">
          <Button text="Start coding now" wide />
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
          Adready a member? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;

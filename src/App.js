import "./App.css";
import Button from "./components/Button/Button";
import InputField from "./components/InputField/InputField";
import { MAIL_ICON, LOCK_ICON } from "./globals/constants";
import SocialIcon, {
  GithubIcon,
  GoogleIcon
} from "./components/SocialIcon/SocialIcon";

function App() {
  return (
    <div className="App">
      <h1>Components</h1>
      <div style={{ width: "400px", margin: "10px" }}>
        <Button text="Login" />
      </div>
      <div style={{ width: "400px", margin: "10px" }}>
        <InputField icon={MAIL_ICON} iconPrefix placeholder="Email" />
      </div>
      <div style={{ width: "400px", margin: "10px" }}>
        <InputField icon={LOCK_ICON} iconPrefix placeholder="Password" />
      </div>
      <div style={{ width: "400px", margin: "10px", display: "flex" }}>
        <SocialIcon onClick={() => {}}>
          <GithubIcon />
        </SocialIcon>
        <SocialIcon onClick={() => {}}>
          <GoogleIcon />
        </SocialIcon>
      </div>
    </div>
  );
}

export default App;

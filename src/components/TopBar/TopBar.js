// import NoProfilePic from "../../static/images/noProfilePic.svg";
import DevChallengesLogo from "../../static/images/devchallenges.svg";

import Dropdown from "../Dropdown/Dropdown";

import "./styles.css";
import useComponentVisible from "../../hooks/useComponentVisible";
import ProfileImage from "../ProfileImage/ProfileImage";

const TopBar = () => {
  const { ref, isComponentVisible, toggleVisibility } = useComponentVisible();

  return (
    <div className="tb-container">
      <div className="left">
        <img
          src={DevChallengesLogo}
          alt="dev-challenges-logo"
          className="dev-ch-logo"
        />
      </div>
      <button onClick={toggleVisibility} ref={ref} className="no-styles">
        <div className="right">
          <ProfileImage size={32} />

          <p className="profile-name">User name</p>
          <div
            className={`arrow-down ${
              !isComponentVisible ? "rotate-back" : ""
            } ${isComponentVisible ? "rotate" : ""}`}
          ></div>
          {isComponentVisible && <Dropdown />}
        </div>
      </button>
    </div>
  );
};

export default TopBar;

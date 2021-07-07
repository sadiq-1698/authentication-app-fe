import NoProfilePic from "../../static/images/noProfilePic.svg";
import DevChallengesLogo from "../../static/images/devchallenges.svg";

import Dropdown from "../Dropdown/Dropdown";

import "./styles.css";
import useComponentVisible from "../../hooks/useComponentVisible";

const TopBar = () => {
  const { ref, isComponentVisible, toggleVisibility } = useComponentVisible();
  const triggerDropdown = e => {
    e.preventDefault();
    toggleVisibility();
  };

  return (
    <div className="tb-container">
      <div className="left">
        <img
          src={DevChallengesLogo}
          alt="dev-challenges-logo"
          className="dev-ch-logo"
        />
      </div>
      <a href="/" onClick={triggerDropdown} ref={ref}>
        <div className="right">
          <div className="img-container">
            <img
              src={NoProfilePic}
              alt="no-profile-img"
              className="no-profile-img"
              width="100%"
              height="100%"
            />
          </div>

          <p className="profile-name">User name</p>
          <div
            className={`arrow-down ${!isComponentVisible ? "rotate2" : ""} ${
              isComponentVisible ? "rotate" : ""
            }`}
          ></div>
          {isComponentVisible && <Dropdown />}
        </div>
      </a>
    </div>
  );
};

export default TopBar;

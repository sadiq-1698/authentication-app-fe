import NoProfilePic from "../../static/images/noProfilePic.svg";
import DevChallengesLogo from "../../static/images/devchallenges.svg";

import "./styles.css";

const TopBar = () => {
  return (
    <div className="tb-container">
      <div className="left">
        <img
          src={DevChallengesLogo}
          alt="dev-challenges-logo"
          className="dev-ch-logo"
        />
      </div>
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
        <div className="arrow-down"></div>
      </div>
    </div>
  );
};

export default TopBar;

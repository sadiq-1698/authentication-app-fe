import PropTypes from "prop-types";

import NoProfilePic from "../../static/images/noProfilePic.svg";

import "./styles.css";

const ConversationTile = ({ current }) => {
  return (
    <div className={`friend-tile ${current ? "selected" : ""}`}>
      <div className="img-container">
        <img src={NoProfilePic} alt="profile-pic" width="42px" height="42px" />
      </div>

      <p className="friend-name">Xamien Theal</p>
    </div>
  );
};

ConversationTile.propTypes = {
  current: PropTypes.bool
};

ConversationTile.defaultProps = {
  current: false
};

export default ConversationTile;

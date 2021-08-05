import PropTypes from "prop-types";

import "./styles.css";

const MessageTile = ({ message, owner }) => {
  return (
    <div className={`message-block ${owner ? "" : "receiver-block"}`}>
      <div className={`${owner ? "sender" : "receiver"}`}>
        <p>{message}</p>
      </div>
    </div>
  );
};

MessageTile.propTypes = {
  message: PropTypes.string.isRequired,
  owner: PropTypes.bool
};

MessageTile.defaultProps = {
  owner: false
};

export default MessageTile;

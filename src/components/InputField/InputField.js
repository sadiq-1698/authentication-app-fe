import PropTypes from "prop-types";

import { ICONS } from "../../globals/constants";

import "./styles.css";

const InputField = ({ variant, label, iconPrefix, send, icon, ...props }) => {
  if (send) {
    return (
      <div className="send-message-input">
        <input {...props} placeholder="Type message" />
        <button className="send-message-btn">
          <i className={ICONS.SEND} aria-hidden="true"></i>
        </button>
      </div>
    );
  }

  if (variant) {
    return (
      <div className="input-variant">
        <p>{label}</p>
        <input {...props} className="input" />
      </div>
    );
  }

  if (iconPrefix) {
    return (
      <div className="input-icon">
        <input {...props} className="input" />
        <i className={icon} aria-hidden="true"></i>
      </div>
    );
  }
  return <input {...props} className="input" />;
};

InputField.propTypes = {
  variant: PropTypes.bool,
  iconPrefix: PropTypes.bool,
  icon: PropTypes.string,
  label: PropTypes.string
};

InputField.defaultProps = {
  variant: false,
  iconPrefix: false,
  label: "",
  icon: ""
};

export default InputField;

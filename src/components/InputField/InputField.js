import PropTypes from "prop-types";
import "./styles.css";

const InputField = ({ iconPrefix, icon, ...props }) => {
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
  iconPrefix: PropTypes.bool,
  icon: PropTypes.string
};

InputField.defaultProps = {
  iconPrefix: false,
  icon: ""
};

export default InputField;

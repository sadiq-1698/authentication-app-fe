import PropTypes from "prop-types";
import "./styles.css";

const InputField = ({ variant, label, iconPrefix, icon, ...props }) => {
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

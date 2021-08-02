import "./styles.css";
import PropTypes from "prop-types";

const Button = ({ text, wide, ...props }) => {
  return (
    <button
      style={getButtonWidth(wide)}
      className={`button 
      ${props.disabled ? "disabled" : ""} ${props.loading ? "loading" : ""}`}
      {...props}
    >
      {text}
    </button>
  );
};

function getButtonWidth(wide) {
  if (wide) {
    return { width: "100%" };
  } else {
    return { width: "auto" };
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  wide: PropTypes.bool
};

Button.defaultProps = {
  wide: false
};

export default Button;

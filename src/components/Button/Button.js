import "./styles.css";
import PropTypes from "prop-types";

const Button = ({ text, wide, loading, ...props }) => {
  return (
    <button
      style={getButtonWidth(wide)}
      className={`button 
      ${loading ? "disabled" : ""} ${loading ? "loading" : ""}`}
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
  wide: PropTypes.bool,
  loading: PropTypes.bool
};

Button.defaultProps = {
  wide: false,
  loading: false
};

export default Button;

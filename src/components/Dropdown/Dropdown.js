import PropTypes from "prop-types";

import { ICONS } from "../../globals/constants";

import { useAuth } from "../../contexts/authContext";

import "./styles.css";

const Dropdown = () => {
  return (
    <div className="dropdown-container">
      <DropdownItem text="My Profile" url="/" iconClass={ICONS.PROFILE} />
      <DropdownItem text="Messenger" url="/messenger" iconClass={ICONS.CHAT} />
      <DropdownItem text="Logout" url="#" logout iconClass={ICONS.LOGOUT} />
    </div>
  );
};

const DropdownItem = ({ text, url, logout, iconClass }) => {
  const { logout: userLogout } = useAuth();

  const handleLogout = e => {
    e.preventDefault();
    userLogout();
  };

  if (logout) {
    return (
      <>
        <div className="menu-divider"></div>
        <a href="/" onClick={e => handleLogout(e)}>
          <div className={`dropdown-item ${logout ? "logout" : ""}`}>
            <i className={iconClass} aria-hidden="true"></i>
            <p>{text}</p>
          </div>
        </a>
      </>
    );
  }
  return (
    <a href={url}>
      <div className="dropdown-item">
        <i className={iconClass} aria-hidden="true"></i>
        <p>{text}</p>
      </div>
    </a>
  );
};

DropdownItem.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  logout: PropTypes.bool
};

DropdownItem.defaultProps = {
  logout: false
};

export default Dropdown;

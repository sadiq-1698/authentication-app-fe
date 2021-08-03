import NoProfilePic from "../../static/images/noProfilePic.svg";

import "./styles.css";

const ProfileImage = ({ size, image }) => {
  return (
    <div
      className="img-container"
      style={{ height: `${size}px`, width: `${size}px` }}
    >
      <img
        src={image ? image : NoProfilePic}
        alt="profile-img"
        className="profile-img"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default ProfileImage;

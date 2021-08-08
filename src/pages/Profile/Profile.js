import { useAuth } from "../../contexts/authContext";

import TopBar from "../../components/TopBar/TopBar";
import ProfileImage from "../../components/ProfileImage/ProfileImage";

import "./styles.css";

const Profile = () => {
  const { getUser } = useAuth();
  const { email, name, bio, password, profilePhoto, phone } = getUser();

  return (
    <div>
      <div className="topbar-container">
        <TopBar />
      </div>

      <div className="profile-header">
        <p className="main">Personal info</p>
        <p className="sub">Basic info, like your name and photo</p>
      </div>

      <div className="profile-details-box">
        <div className="profile-box-item main space-between">
          <div className="left">
            <p className="profile">Profile</p>
            <p className="visibility-msg">
              Some info may be visible to other people
            </p>
          </div>
          <div className="right">
            <a href="/edit">
              <div className="edit-profile-btn">Edit</div>
            </a>
          </div>
        </div>

        <div className="profile-item-divider"></div>

        <div className="profile-box-item sub">
          <div className="left">
            <p>PHOTO</p>
          </div>

          <div className="right">
            <ProfileImage size={75} image={profilePhoto && profilePhoto} />
          </div>
        </div>

        <div className="profile-item-divider"></div>

        <div className="profile-box-item sub">
          <div className="left">
            <p>NAME</p>
          </div>

          <div className="right">
            <p>{name ? name : "Add your name"}</p>
          </div>
        </div>

        <div className="profile-item-divider"></div>

        <div className="profile-box-item sub">
          <div className="left">
            <p>BIO</p>
          </div>

          <div className="right">
            <p>{bio ? bio : "Add your bio"}</p>
          </div>
        </div>

        <div className="profile-item-divider"></div>

        <div className="profile-box-item sub">
          <div className="left">
            <p>PHONE</p>
          </div>

          <div className="right">
            <p>{phone ? phone : "Add your phone number"}</p>
          </div>
        </div>

        <div className="profile-item-divider"></div>

        <div className="profile-box-item sub">
          <div className="left">
            <p>EMAIL</p>
          </div>

          <div className="right">
            <p>{email ? email : "Add your email ID"}</p>
          </div>
        </div>

        <div className="profile-item-divider"></div>

        <div className="profile-box-item sub">
          <div className="left">
            <p>PASSWORD</p>
          </div>

          <div className="right">
            <p>{password ? password : "**********"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

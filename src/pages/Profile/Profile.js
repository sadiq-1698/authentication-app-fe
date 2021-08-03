import TopBar from "../../components/TopBar/TopBar";
import ProfileImage from "../../components/ProfileImage/ProfileImage";

import "./styles.css";

const Profile = () => {
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
            <ProfileImage size={75} />
          </div>
        </div>

        <div className="profile-item-divider"></div>

        <div className="profile-box-item sub">
          <div className="left">
            <p>NAME</p>
          </div>

          <div className="right">
            <p>User Name</p>
          </div>
        </div>

        <div className="profile-item-divider"></div>

        <div className="profile-box-item sub">
          <div className="left">
            <p>BIO</p>
          </div>

          <div className="right">
            <p>I am a software developer and a big fan of devchallenges...</p>
          </div>
        </div>

        <div className="profile-item-divider"></div>

        <div className="profile-box-item sub">
          <div className="left">
            <p>PHONE</p>
          </div>

          <div className="right">
            <p>908249274292</p>
          </div>
        </div>

        <div className="profile-item-divider"></div>

        <div className="profile-box-item sub">
          <div className="left">
            <p>EMAIL</p>
          </div>

          <div className="right">
            <p>Username@gmail.com</p>
          </div>
        </div>

        <div className="profile-item-divider"></div>

        <div className="profile-box-item sub">
          <div className="left">
            <p>PASSWORD</p>
          </div>

          <div className="right">
            <p>**********</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

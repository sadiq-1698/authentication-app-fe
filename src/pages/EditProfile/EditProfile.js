import NoProfilePic from "../../static/images/noProfilePic.svg";
import TopBar from "../../components/TopBar/TopBar";

import "./styles.css";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";

const EditProfile = () => {
  return (
    <div>
      <div className="topbar-container">
        <TopBar />
      </div>

      <div className="back-btn-container">
        <a href="/">&lt;&nbsp;&nbsp;Back</a>
      </div>

      <div className="profile-details-box">
        <div className="profile-box-item main space-between">
          <div className="left">
            <p className="profile">Change Info</p>
            <p className="visibility-msg">
              Changes will be reflected to every services
            </p>
          </div>
        </div>

        <label htmlFor="file">
          <div className="change-photo-container">
            <div>
              <img
                src={NoProfilePic}
                alt="profile-pic"
                width="72px"
                height="72px"
              />
            </div>
            <p>CHANGE PHOTO</p>
            <input type="file" id="file" />
          </div>
        </label>

        <div className="profile-box-input sub">
          <InputField variant label="Name" placeholder="Enter your name..." />
        </div>

        <div className="profile-box-input sub">
          <InputField variant label="Bio" placeholder="Enter your bio..." />
        </div>

        <div className="profile-box-input sub">
          <InputField
            variant
            label="Phone"
            placeholder="Enter your phone..."
            type="number"
          />
        </div>

        <div className="profile-box-input sub">
          <InputField
            variant
            label="Email"
            placeholder="Enter your email..."
            type="email"
          />
        </div>

        <div className="profile-box-input sub">
          <InputField
            variant
            label="Password"
            placeholder="Enter your password..."
            type="password"
          />
        </div>

        <div className="profile-box-input sub">
          <Button text="Save" />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

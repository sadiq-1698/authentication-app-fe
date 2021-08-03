import NoProfilePic from "../../static/images/noProfilePic.svg";

import TopBar from "../../components/TopBar/TopBar";

import "./styles.css";

const Messenger = () => {
  return (
    <div>
      <div className="topbar-container">
        <TopBar />
      </div>

      <div className="messenger-container">
        <div className="friends-box">
          <p className="sub-header">FRIENDS</p>

          <div className="friend-tile selected">
            <div className="img-container">
              <img
                src={NoProfilePic}
                alt="profile-pic"
                width="42px"
                height="42px"
              />
            </div>

            <p className="friend-name">Xamien Theal</p>
          </div>
          <div className="friend-tile">
            <img
              src={NoProfilePic}
              alt="profile-pic"
              width="42px"
              height="42px"
            />
            <p className="friend-name">Xamien Theal</p>
          </div>

          <p className="sub-header">GROUPS</p>
        </div>

        <div className="chat-box">
          <p className="sub-header">CHATS</p>
        </div>
      </div>
    </div>
  );
};

export default Messenger;

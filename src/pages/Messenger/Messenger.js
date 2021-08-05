import TopBar from "../../components/TopBar/TopBar";
// import InputField from "../../components/InputField/InputField";

import "./styles.css";
import InputField from "../../components/InputField/InputField";
import MessageTile from "../../components/MessageTile/MessageTile";
import ConversationTile from "../../components/ConversationTile/ConversationTile";

const Messenger = () => {
  return (
    <>
      <div className="topbar-container">
        <TopBar />
      </div>

      <div className="messenger-container">
        <div className="friends-box">
          <p className="sub-header">FRIENDS</p>

          <ConversationTile current />
          <ConversationTile />

          <p className="sub-header">GROUPS</p>
        </div>

        {/* chat section */}
        <div className="chat-box">
          <p className="sub-header">CHATS</p>

          <hr className="header-divider" />

          <div className="chat-content-wrapper">
            <div className="chat-messages">
              <MessageTile owner message="Hello there" />
              <MessageTile message="Hey" />
              <MessageTile owner message="What's up?" />
            </div>
          </div>

          <InputField send />
        </div>
      </div>
    </>
  );
};

export default Messenger;

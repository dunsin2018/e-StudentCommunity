import React from "react";
import "./messenger.css";
import moment from "moment";

const Messenger = ({ messages, currentUser }) => {
  return (
    <main class="msger-chat">
      {messages.map((mesg, index) => {
        const { sender, message, timestamp } = mesg;

        if (currentUser.displayName === sender) {
          return (
            <div class="msg right-msg" key={index}>
              <div
                class="msg-img"
                style={{
                  backgroundImage:
                    "url(https://image.flaticon.com/icons/svg/145/145867.svg)",
                }}
              ></div>

              <div class="msg-bubble">
                <div class="msg-info">
                  <div class="msg-info-name">{sender}</div>
                  <div class="msg-info-time">
                    {" "}
                    {moment(new Date(timestamp?.toDate())).format(
                      "MMM Do YYYY"
                    )}
                  </div>
                </div>

                <div class="msg-text">{message}</div>
              </div>
            </div>
          );
        } else {
          return (
            <div class="msg left-msg" key={index}>
              <div
                class="msg-img"
                style={{
                  backgroundImage:
                    "url(https://image.flaticon.com/icons/svg/145/145867.svg)",
                }}
              ></div>

              <div class="msg-bubble">
                <div class="msg-info">
                  <div class="msg-info-name">{sender}</div>
                  <div class="msg-info-time">
                    {moment(new Date(timestamp?.toDate())).format(
                      "MMM Do YYYY"
                    )}
                  </div>
                </div>

                <div class="msg-text">{message}</div>
              </div>
            </div>
          );
        }
      })}
    </main>
  );
};

export default Messenger;

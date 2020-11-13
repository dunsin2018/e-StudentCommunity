import React from "react";
import "./messenger.css";

const Messenger = () => {
  return (
    <main class="msger-chat">
      <div class="msg left-msg">
        <div
          class="msg-img"
          style={{
            backgroundImage:
              "url(https://image.flaticon.com/icons/svg/145/145867.svg)",
          }}
        ></div>

        <div class="msg-bubble">
          <div class="msg-info">
            <div class="msg-info-name">BOT</div>
            <div class="msg-info-time">12:45</div>
          </div>

          <div class="msg-text">
            Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
          </div>
        </div>
      </div>

      <div class="msg right-msg">
        <div
          class="msg-img"
          style={{
            backgroundImage:
              "url(https://image.flaticon.com/icons/svg/145/145867.svg)",
          }}
        ></div>

        <div class="msg-bubble">
          <div class="msg-info">
            <div class="msg-info-name">Sajad</div>
            <div class="msg-info-time">12:46</div>
          </div>

          <div class="msg-text">You can change your name in JS section!</div>
        </div>
      </div>
      <div class="msg left-msg">
        <div
          class="msg-img"
          style={{
            backgroundImage:
              "url(https://image.flaticon.com/icons/svg/145/145867.svg)",
          }}
        ></div>

        <div class="msg-bubble">
          <div class="msg-info">
            <div class="msg-info-name">BOT</div>
            <div class="msg-info-time">12:45</div>
          </div>

          <div class="msg-text">
            Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
          </div>
        </div>
      </div>
      <div class="msg right-msg">
        <div
          class="msg-img"
          style={{
            backgroundImage:
              "url(https://image.flaticon.com/icons/svg/145/145867.svg)",
          }}
        ></div>

        <div class="msg-bubble">
          <div class="msg-info">
            <div class="msg-info-name">Sajad</div>
            <div class="msg-info-time">12:46</div>
          </div>

          <div class="msg-text">You can change your name in JS section!</div>
        </div>
      </div>
    </main>
  );
};

export default Messenger;

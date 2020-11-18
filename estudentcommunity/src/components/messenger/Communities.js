import React from "react";

const Communities = ({ id, name, setRoomId, roomId }) => {
  return (
    <h6
      className={
        roomId === id
          ? "mb-3 border communities active"
          : "mb-3 border communities"
      }
      onClick={() => setRoomId(id)}
    >
      {name}
    </h6>
  );
};

export default Communities;

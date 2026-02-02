import React from "react";
import profileImg from "./profile.png";

function Profile() {
  return (
    <div>
      <h2>My Profile</h2>
      <img
        src={profileImg}
      />
    </div>
  );
}

export default Profile;
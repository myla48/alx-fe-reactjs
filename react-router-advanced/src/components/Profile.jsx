import { Outlet } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h2>User Profile</h2>
      <Outlet /> {/* Nested routes render here */}
    </div>
  );
}
export default Profile;

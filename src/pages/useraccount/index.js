import React from "react";
import EditProfile from "@/components/profile/editProfile";
import UserAccountLayout from "@/components/layouts/userAccountLayout";
import UserAccountSidebar from "@/components/leftSidebar/userAccountSidebar";

const UserAccount = () => {
  return (
    <UserAccountLayout>
      <EditProfile />
      {/* <UserAccountSidebar/> */}
    </UserAccountLayout>

  );
};

export default UserAccount;

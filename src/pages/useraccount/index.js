import React from "react";
import EditProfile from "@/components/profile/editProfile";
import UserAccountLayout from "@/components/layouts/userAccountLayout";
import UserAccountSidebar from "@/components/leftSidebar/userAccountSidebar";

const UserAccount = () => {
  return (
    <div>
      <EditProfile />
      {/* <UserAccountSidebar/> */}
    </div>
  );
};
UserAccount.getLayout = (page) => <UserAccountLayout>{page}</UserAccountLayout>;

export default UserAccount;

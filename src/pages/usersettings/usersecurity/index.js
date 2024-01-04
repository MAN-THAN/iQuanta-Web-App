import UserSettingLayout from "@/components/layouts/userSettingLayout";
import UserSecurity from "@/components/userSettings/userSecurity";
import React from "react";

const index = () => {
  return (
    <UserSettingLayout>
      <UserSecurity />
    </UserSettingLayout>
  );
};

export default index;

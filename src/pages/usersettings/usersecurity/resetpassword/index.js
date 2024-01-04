import UserSettingLayout from "@/components/layouts/userSettingLayout";
import ResetPassword from "@/components/userSettings/resetPassword";
import React from "react";

const index = () => {
  return (
    <UserSettingLayout>
      <ResetPassword />
    </UserSettingLayout>
  );
};

export default index;

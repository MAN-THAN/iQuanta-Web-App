import UserSettingLayout from "@/components/layouts/userSettingLayout";
import LoginActivity from "@/components/userSettings/loginActivity";
import React from "react";

const index = () => {
  return (
    <UserSettingLayout>
      <LoginActivity />
    </UserSettingLayout>
  );
};

export default index;

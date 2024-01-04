import UserSettingLayout from "@/components/layouts/userSettingLayout";
import DeactivateAccount from "@/components/userSettings/deactivateAccount";
import React from "react";

const index = () => {
  return (
    <UserSettingLayout>
      <DeactivateAccount />
    </UserSettingLayout>
  );
};

export default index;

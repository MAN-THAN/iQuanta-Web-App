import UserSettingLayout from "@/components/layouts/userSettingLayout";
import SearchHistory from "@/components/userSettings/searchHistory";

const index = () => {
  return (
    <UserSettingLayout>
      <SearchHistory />
    </UserSettingLayout>
  );
};

export default index;

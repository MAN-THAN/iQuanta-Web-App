import request from "@/api/request";

export const getLinkedAccounts = async (uid) => {
  try {
    const res = await request({
      url: `/auth/v1/profile/settings/activity/accounts/${uid}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
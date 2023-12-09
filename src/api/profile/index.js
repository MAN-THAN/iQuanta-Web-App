import request from "../request";

//get user profile details
export const getProfileInfo = async (uid) => {
  try {
    const res = await request({
      url: `/auth/v1/profile/settings/basic/${uid}`,
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


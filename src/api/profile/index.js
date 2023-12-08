import request from "../request";

export const getProfileInfo = async (uid) => {
  try {
    const res = await request({
      url: `/auth/v1/profile/detail/${uid}`,
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

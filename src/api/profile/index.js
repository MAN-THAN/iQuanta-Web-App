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
//update user profile details
export const updateProfileInfo = async (uid, payload) => {
  try {
    console.log(payload);
    const res = await request({
      url: `/auth/v1/profile/settings/basic/${uid}`,
      type: "PATCH",
      data: payload,
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
//update user profile pics
export const updateProfilePic = async (uid, payload) => {
  try {
    const res = await request({
      url: `/auth/v1/profile/settings/basic/thumbnail/${uid}`,
      type: "PATCH",
      data: payload,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

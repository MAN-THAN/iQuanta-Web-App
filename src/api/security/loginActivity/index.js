import request from "@/api/request";

//get user login activity
export const getLoginActivity = async (uid) => {
  try {
    const res = await request({
      url: `/auth/v1/profile/settings/loginActivity/${uid}`,
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

//post user login activity
export const postLoginActivity = async (uid, payload) => {
  try {
    const res = await request({
      url: `/auth/v1/profile/settings/loginActivity/${uid}`,
      type: "POST",
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

//delete user login activity
export const deleteLoginActivity = async (uid) => {
  try {
    const res = await request({
      url: `/auth/v1/profile/settings/loginActivity/${uid}`,
      type: "DELETE",
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

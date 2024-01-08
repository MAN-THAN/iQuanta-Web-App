import request from "@/api/request";

//deactivate account APIs
export const sendOTP = async (payload) => {
  try {
    const res = await request({
      url: `/auth/v1/creds/verify/sendOTP`,
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

export const verifyOTP = async (payload) => {
  try {
    const res = await request({
      url: `/auth/v1/creds/verify/verifyOTP`,
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

export const deactivateAccount = async (uid, payload) => {
  try {
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

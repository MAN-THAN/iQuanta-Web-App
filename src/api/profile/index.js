import request from "../request";

export const getProfileInfo = async () => {
  try {
    const res = await request({
      url: `/api/user/v1/auth/`,
      data: {num : phoneNum},
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
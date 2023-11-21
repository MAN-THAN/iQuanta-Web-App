import request from "../request";

export const userSignup = async () => {
  try {
    const res = await request({
      url: ``,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const userInterest = async (arr) => {
  try {
    const res = await request({
      url: `/api/user/v1/auth/`,
      data: arr,
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

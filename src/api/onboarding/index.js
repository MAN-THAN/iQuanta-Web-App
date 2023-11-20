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

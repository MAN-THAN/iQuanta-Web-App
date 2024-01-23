import request from "@/api/request";

//user POST reaction
export const postUserReaction = async (payload) => {
  try {
    const res = await request({
      url: `/feed/v1/user/post/reactions`,
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

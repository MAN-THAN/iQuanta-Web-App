import request from "@/api/request";

//GET user reaction by post Id
export const getReactionsByPostId = async (postId, uid) => {
  try {
    const res = await request({
      url: `/feed/v1/user/post/reactions/list/${postId}`,
      headers: {
        "Content-Type": "application/json",
        uid:uid
      },
    });
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
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

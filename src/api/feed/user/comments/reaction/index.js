import request from "@/api/request";

//reaction on comment apis
export const postUserReactionOnComment = async (payload, uid) => {
  try {
    const res = await request({
      url: `/feed/v1/user/comment/reactions`,
      type: "POST",
      data: payload,
      headers: {
        uid: uid,
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const deleteUserReactionOnComment = async (reactionId, uid) => {
    try {
      const res = await request({
        url: `/feed/v1/user/comment/reactions/${reactionId}`,
        type: "DELETE",
        headers: {
          uid: uid,
          "Content-Type": "application/json",
        },
      });
      return res;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
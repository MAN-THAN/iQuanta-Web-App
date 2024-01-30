import request from "@/api/request";

//comment apis
export const createUserPostComment = async (payload, uid) => {
  try {
    const res = await request({
      url: `/feed/v1/user/comment`,
      type: "POST",
      data: payload,
      headers: {
        uid:uid,
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const editUserPostComment = async (postId, uid) => {};

export const getUserPostComments = async (postId, uid) => {};

export const userCommentReactToComment = async (postId, uid) => {};

export const userPostCommentReport = async (postId, uid) => {};
export const userPostComment = () => {};

import request from "@/api/request";

//comment apis
export const createUserPostComment = async (payload, uid) => {
  try {
    const res = await request({
      url: `/feed/v1/user/comment`,
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

export const editUserPostComment = async (commentId, payload, uid) => {
  try {
    const res = await request({
      url: `/feed/v1/user/comment/update/${commentId}`,
      type: "PATCH",
      data: payload,
      headers: {
        "Content-Type": "application/json",
        uid: uid,
      },
    });
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getUserPostComments = async (postId, page, limit, uid) => {
  try {
    const res = await request({
      url: `/feed/v1/user/comment/list/${postId}/${page}/${limit}`,
      headers: {
        "Content-Type": "application/json",
        uid: uid,
      },
    });
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
// Delete  comment
export const deleteUserPostComments = async (commentId, uid) => {
  try {
    const res = await request({
      url: `/feed/v1/user/comment/delete/${commentId}`,
      type: "DELETE",
      headers: {
        "Content-Type": "application/json",
        uid: uid,
      },
    });
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const userCommentReactToComment = async (postId, uid) => {};

export const userPostCommentReport = async (postId, uid) => {};
export const userPostComment = () => {};

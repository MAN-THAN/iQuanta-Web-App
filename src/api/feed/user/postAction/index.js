import request from "@/api/request";

//user post ACTIONS APIs
export const saveUserPost = async (uid, postId, status) => {
  try {
    const res = await request({
      url: `/feed/v1/user/post/save/${uid}/${postId}/${status}`,
      type: "POST",
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
export const reportUserPost = async (uid, postId) => {
  try {
    const res = await request({
      url: `/feed/v1/user/post/report/${uid}/${postId}`,
      type: "POST",
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
export const followUserPost = async (uid, postId, status) => {
  try {
    const res = await request({
      url: `/feed/v1/user/post/followed/${uid}/${postId}/${status}`,
      type: "POST",
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
export const turnOffCommentsUserPost = async (postId, commentAllow) => {
  try {
    const res = await request({
      url: `/feed/v1/user/post/comment/allow/${postId}/${commentAllow}`,
      type: "POST",
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

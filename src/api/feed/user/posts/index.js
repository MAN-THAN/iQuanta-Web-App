import request from "@/api/request";

export const getAllPost = async (page, limit, uid) => {
  try {
    console.log("page,limit", page, limit);
    const res = await request({
      url: `/feed/v1/user/post/all/${page}/${limit}`,
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

export const createPost = async (payload, contentType, uid) => {
  try {
    const res = await request({
      url: `/feed/v1/user/post`,
      type: "POST",
      data: payload,
      headers: {
        "Content-Type": contentType == "json" ? "application/json" : "multipart/form-data",
        uid: uid,
      },
    });
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const editPost = async (postId, payload) => {
    try {
      const res = await request({
        url: `/feed/v1/user/post/${postId}`,
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

export const getDebateParticipants = async (uid) => {
  try {
    const res = await request({
      url: `/feed/v1/user/post/debate/participants/${uid}`,
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
//get Topics for user feed
export const getTopicsForFeed = async () => {
  try {
    const res = await request({
      url: `/exams/v1/topic`,
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

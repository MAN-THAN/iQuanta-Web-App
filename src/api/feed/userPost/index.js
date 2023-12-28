import request from "@/api/request";

export const getAllPost = async (page, limit) => {
  try {
    const res = await request({
      url: `/feed/v1/user/post/${page}/${limit}`,
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

export const createPost = async (payload) => {
  try {
    const res = await request({
      url: `/feed/v1/user/post`,
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

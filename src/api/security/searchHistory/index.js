import request from "@/api/request";

//get user search history
export const getSearchHistory = async (uid) => {
  try {
    const res = await request({
      url: `/auth/v1/profile/settings/searchHistory/${uid}`,
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

//post user search history
export const postSearchHistory = async (uid, payload) => {
  try {
    const res = await request({
      url: `/auth/v1/profile/settings/searchHistory/${uid}`,
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

//delete user search history
export const deleteSearchHistory = async (uid, itemId) => {
  try {
    const res = await request({
      url: `/auth/v1/profile/settings/searchHistory/${uid}/${itemId}`,
      type: "DELETE",
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

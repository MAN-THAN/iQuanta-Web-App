import request from "@/api/request";
// get Notifications Settings
export const getNotifSettings = async (uid) => {
  try {
    const res = await request({
      url: `/auth/v1/profile/settings/activity/notification/${uid}`,
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
// Update Notifications Settings
export const updateNotifSettings = async (uid, payload) => {
  try {
    const res = await request({
      url: `/auth/v1/profile/settings/activity/notification/${uid}`,
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
// get Privacy Settings
export const getPrivacySettings = async (uid) => {
  try {
    const res = await request({
      url: `/auth/v1/profile/settings/activity/privacy/${uid}`,
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
// Update Privacy Settings
export const updatePrivacySettings = async (uid, payload) => {
  try {
    const res = await request({
      url: `/auth/v1/profile/settings/activity/privacy/${uid}`,
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
// getFAQ api
export const getFaq = async (uid) => {
  try {
    const res = await request({
      url: `/auth/v1/faq`,
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
// logout api
export const userLogOut = async (uid) => {
  try {
    const res = await request({
      url: `/auth/v1/creds/logout`,
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
// get Block List
export const getBlockList = async (uid) => {
  try {
    const res = await request({
      url: `/auth/v1/profile/settings/basic/list/blockList/${uid}`,
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
// update block status
export const updateBlockStatus = async (uid, status) => {
  try {
    const res = await request({
      url: `/auth/v1/profile/settings/basic/block/${uid}/${status}`,
      type:'POST',
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
// remove block user
export const removeBlockedUser = async (uid, friendId) => {
  try {
    const res = await request({
      url: `/auth/v1/profile/settings/basic/removeBlockUser/${uid}/${friendId}`,
      type:'PATCH',
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

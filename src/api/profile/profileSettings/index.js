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
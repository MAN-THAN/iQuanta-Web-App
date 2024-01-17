import request from "@/api/request";

//get friend list
export const getFriendList = async (uid) => {
    try {
      const res = await request({
        url: `/auth/v1/people/friend/lists/${uid}`,
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
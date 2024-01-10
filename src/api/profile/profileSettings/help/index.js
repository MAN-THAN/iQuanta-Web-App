import request from "@/api/request";

// create counselling
export const createCounselling = async (uid, payload) => {
  try {
    const res = await request({
      url: `/auth/v1/counselling/${uid}`,
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

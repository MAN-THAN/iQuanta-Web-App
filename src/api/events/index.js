import request from "@/api/request";

//getUpcomingEvents
export const getUpcomingEvents = async (uid) => {
  try {
    const res = await request({
      url: `/feed/v1/group/event`,
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
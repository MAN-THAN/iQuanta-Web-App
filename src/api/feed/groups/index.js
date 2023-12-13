import request from "@/api/request";

export const getGroups = async () => {
    try {
      const res = await request({
        url: `feed/v1/group`,
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
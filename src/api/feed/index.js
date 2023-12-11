import request from "../request";

export const userAuthGen = async (phoneNum) => {
    try {
      const res = await request({
        url: `/auth/v1/creds/sendOtp`,
        type: "POST",
        data: { phonomail: String(phoneNum) },
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
import request from "../request";

export const userAuthGen = async (phoneNum) => {
  try {
    const res = await request({
      url: `/api/user/v1/auth/generateMobileOtp`,
      data: {num : phoneNum},
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

export const userVerification = async (otp) => {
  try {
    const res = await request({
      url: `/api/user/v1/auth/verifyMobileOtp`,
      data: {num : otp},
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

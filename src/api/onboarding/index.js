import request from "../request";

export const userAuthGen = async (phoneNum) => {
  try {
    const res = await request({
      url: `/auth/v1/creds/send-otp`,
      type:'POST',
      data: {phoneNumber : String(phoneNum)},
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

export const userVerification = async (phoneNum, otp) => {
  try {
    const res = await request({
      url: `/auth/v1/creds/verify-otp`,
      type: 'POST',
      data: {phoneNumber : String(phoneNum), Otp : String(otp)},
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

export const userInterest = async (arr) => {
  try {
    const res = await request({
      url: `/api/user/v1/auth/`,
      type: 'POST',
      data: arr,
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


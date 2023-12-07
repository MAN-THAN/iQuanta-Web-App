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

export const userVerification = async (phoneNum, otp) => {
  try {
    const res = await request({
      url: `/auth/v1/creds/verifyOtp`,
      type: "POST",
      data: { phonomail: String(phoneNum), otp: String(otp) },
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

export const updateProfile = async (uid, payload) => {
  try {
    const res = await request({
      url: `/auth/v1/onboard/update/${uid}`,
      data: payload,
      type: "PATCH",
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

export const getExams = async () => {
  try {
    const res = await request({
      url: `/auth/v1/onboard/exams`,
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
export const postUserExams = async (uid, payload) => {
  try {
    const res = await request({
      url: `/auth/v1/onboard/update/${uid}`,
      type: "PATCH",
      data: {exams : payload},
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

export const getInterests = async () => {
  try {
    const res = await request({
      url: `/auth/v1/onboard/interests`,
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

export const postUserInterest = async (uid, payload) => {
  try {
    const res = await request({
      url: `/auth/v1/onboard/update/${uid}`,
      type: "PATCH",
      data: {interests : payload},
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
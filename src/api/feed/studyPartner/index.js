import request from "@/api/request";

export const getStudyPartnerList = async () => {
  try {
    const res = await request({
      url: `/auth/v1/profile/detail/getStudyPartnersList`,
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

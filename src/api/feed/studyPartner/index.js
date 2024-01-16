import request from "@/api/request";

//studyPartner existing List
export const getExistingStudyPartnerList = async (uid) => {
  try {
    const res = await request({
      url: `/auth/v1/people/partner/existing/lists/${uid}`,
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
//studyPartner suggesting List
export const getSuggestingStudyPartnerList = async (uid) => {
  try {
    const res = await request({
      url: `/partner/v1/studyPartner/suggestions/${uid}`,
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

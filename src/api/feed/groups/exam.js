import request from "@/api/request";

//get ALL challenges
export const getGroupExamDetail = async (groupId) => {
  try {
    //alert("group exam detail");
    const res = await request({
      url: `/exams/v1/specification/entity/${groupId}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

import request from "@/api/request";


export const getGroupExamDetail = async (examId) => {
  try {
    //alert("group exam detail");
    const res = await request({
      url: `/exams/v1/specification/entity/${examId}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const getGroupCourseList = async (groupId) => {
  try {
    //alert("group exam detail");
    const res = await request({
      url: `exams/v1/courses/list/${groupId}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};



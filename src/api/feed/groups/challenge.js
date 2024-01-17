import request from "@/api/request";

//get ALL challenges
export const getGroupChallengeList = async (page, limit, groupId) => {
  try {
    //alert("group challenge");
    const res = await request({
      url: `/feed/v1/group/challenge/list/${groupId}/${page}/${limit}`,
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
//create Challenges
export const createGroupChallenge = async (payload) => {
  try {
    const res = await request({
      url: `/feed/v1/group/challenge`,
      type: "POST",
      data: payload,
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
//get ALL Topics for challenge
export const getAllTopics = async (entityId) => {
  try {
    const res = await request({
      url: `/exams/v1/practice/qa/list/${entityId}`,
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
//get Subtopics for challenge
export const getSubtopics = async (topicId) => {
  try {
    const res = await request({
      url: `/exams/v1/practice/qa/list/${topicId}`,
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
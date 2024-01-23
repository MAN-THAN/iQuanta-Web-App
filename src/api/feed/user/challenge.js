import request from "@/api/request";

//get ALL challenges
export const getAllChallenges = async (page, limit,uid) => {
    try {
        console.log("66a",uid,page,limit);
      const res = await request({
        url: `/feed/v1/user/challenge/list/${uid}/${page}/${limit}`,
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
  export const createChallenge = async (uid, payload) => {
    try {
      const res = await request({
        url: `/feed/v1/user/challenge`,
        type: "POST",
        data: payload,
        headers: {
          "Content-Type": "application/json",
          uid:uid
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
        //url: `/exams/v1/topic/list/${entityId}`,
        url: `/exams/v1/topic`,
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
            url: `/exams/v1/subtopic/list/${topicId}`,
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
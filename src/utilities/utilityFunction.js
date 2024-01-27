import moment from "moment";
//get post time
export const getTimeAgo = (createdAt) => {
    const postCreationTime = moment(createdAt);
    return postCreationTime.fromNow();
  };
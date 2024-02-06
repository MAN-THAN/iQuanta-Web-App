
import request from "@/api/request";



export const createGroupPost = async(payload,contentType,uid)=>{
    try {
        alert('create group psot')
        const res = await request({
          url: `/feed/v1/group/post`,
          type: "POST",
          data: payload,
          headers: {
            "Content-Type": contentType=='json'?"application/json":"multipart/form-data",
            uid:uid
          },
        });
        return res;
      } catch (err) {
        console.log(err);
        throw err;
      }
  }

export const editGroupPost=async(postId,uid,payload)=>{
    try {
        
        const res = await request({
          url: `/feed/v1/group/post/${postId}`,
          type: "PATCH",
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
  } 

export const getGroupPosts = async(page,limit,uid,groupId)=>{
    try {
      const res = await request({
        url: `feed/v1/group/post/all/${groupId}/${page}/${limit}`,
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
  }
 
export const getGroupPostDetail=async(postId,uid)=>{
    try {
        
        const res = await request({
          url: `/feed/v1/group/post`,
          type: "POST",
          data: payload,
          headers: {
            "Content-Type": "multipart/form-data",
            uid:uid
          },
        });
        return res;
      } catch (err) {
        console.log(err);
        throw err;
      }
  }

export const groupPostReact=async(payload,uid)=>{
    try {
        
        const res = await request({
          url: `/feed/v1/group/post/reactions`,
          type: "POST",
          data: payload,
          headers: {
            "Content-Type": "multipart/form-data",
            uid:uid
          },
        });
        return res;
      } catch (err) {
        console.log(err);
        throw err;
      }
  }

export const groupPostSave=async(uid,groupId,postId,status)=>{
    try {
        
        const res = await request({
          url: `/feed/v1/group/post/save/${groupId}/${postId}/${status}`,
          type: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
            uid:uid
          },
        });
        return res;
      } catch (err) {
        console.log(err);
        throw err;
      }
  }

export const groupPostFollow=async(uid,groupId,postId,status)=>{
    try {
        
        const res = await request({
          url: `/feed/v1/group/post/followed/${groupId}/${postId}/${status}`,
          type: "POST",
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
  }

export const groupPostReport=async(postId,uid)=>{
    try {
        
        const res = await request({
          url: `/feed/v1/group/post/report/${groupId}/${postId}`,
          type: "POST",
          data: { 
          "uid":uid, 
          "groupId":groupId,
          "groupPostId":postId,
          "report":"Bad"
        },
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
  }

  export const groupPostDelete=async(uid,groupId,postId)=>{
    try {
        
        const res = await request({
          url: `/feed/v1/group/post/report/${groupId}/${postId}`,
          type: "DELETE",
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
  }

  export const turnOffCommentsGroupPost=async(uid,groupIdpostId, commentAllow)=>{
    try {
        
        const res = await request({
          url: `/feed/v1/group/post/comment/allow/${groupId}/${postId}/${commentAllow}`,
          type: "POST",
          data: { 
          // "uid":uid, 
          // "groupId":groupId,
          // "groupPostId":postId,
          // "report":"Bad"
        },
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
  } 

export const groupMarkPoll=async(postId,option,uid)=>{
  try {
        
    const res = await request({
      url: `/feed/v1/group/post/${postId}/${option}/${uid}`,
      type: "POST",
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
}
  
export const getGroupDebateParticipants=async(groupId,uid)=>{
  try {
    const res = await request({
      url: `feed/v1/group/members/detail/${groupId}`,
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
}

export const getGroupDocPostList=async(groupId,uid)=>{
  try {
    const res = await request({
      url: `/feed/v1/group/post/all/docs/${groupId}`,
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
}

export const getGroupTopicPostList=async(groupId,uid)=>{
  try {
    const res = await request({
      url: `feed/v1/group/post/all/taggedTopic/${groupId}/${page}/${limit}`,
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
}

export const getGroupMediaPostList=async(page,limit,uid,groupId)=>{
  try {
    const res = await request({
      url: `feed/v1/group/post/media/${groupId}/${page}/${limit}`,
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
}

export const getGroupReportedPostList=async(page,limit,groupId,uid)=>{
  try {
    const res = await request({
      url: `feed/v1/group/post/all/reported/${groupId}/${page}/${limit}`,
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
}


  



import request from "@/api/request";



export const createGroupPost = async(payload,contentType,uid)=>{
    try {
        
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

export const groupPostReact=async(postId,uid)=>{
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

export const groupPostSave=async(postId,uid)=>{
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

export const groupPostFollow=async(postId,uid,status)=>{
    try {
        
        const res = await request({
          url: `/feed/v1/group/post/followed/${uid}/${postId}/${status}`,
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
          url: `/feed/v1/group/report/post`,
          type: "POST",
          data: { 
          "uid":"5f8a89d7ed18ea5e76ee9b82", 
          "groupId":"657d99c95ddac8b346e4ea6b",
          "groupPostId":"658bb140f821c40712303e8e",
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
  

  


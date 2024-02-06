import request from "@/api/request";


//comment apis
export const createGroupPostComment=async(payload,uid)=>{
  //  /feed/v1/group/comment
  try {
    const res = await request({
      url: `/feed/v1/group/comment`,
      type: "POST",
      data: payload,
      headers: {
        uid: uid,
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }

}

export const editGroupPostComment=async(uid,commentId,payload)=>{
try {
    const res = await request({
      url: `/feed/v1/user/comment/update/${commentId}`,
      type:"PATCH",
      data:payload,
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


export const getGroupPostComments=async(postId,uid,page,limit)=>{
    try {
        const res = await request({
          url: `/feed/v1/group/comment/list/${postId}/${page}/${limit}`,
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

export const groupPostCommentReactToComment=async(postId,uid)=>{

}

export const groupPostCommentReport=async(postId,uid)=>{

}

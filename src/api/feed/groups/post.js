
import request from "@/api/request";



export const createGroupPost = async(payload,uid)=>{
    try {
        alert('group post');
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

export const editGroupPost=async(postId,uid)=>{

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

  }

export const groupPostReact=async(postId,uid)=>{

  }

export const groupPostSave=async(postId,uid)=>{

  }

export const groupPostFollow=async(postId,uid)=>{

  }

export const groupPostReport=async(postId,uid)=>{

  }
  
  

  


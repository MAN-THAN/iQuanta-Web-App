import request from "@/api/request";

 //returns user mix group list 
 export const getGroups = async () => {
    try {
      const res = await request({
        url: `feed/v1/group`,
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

  //returns all public and premium group list
  export const getGroupList = async ()=>{
    try {
      const res = await request({
        url: `feed/v1/group/type/list`,
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

  //returns slected group detail
  export const getGroupDetail = async(uid,groupId)=>{
    try {
      const res = await request({
        url: `feed/v1/group/details/${groupId}`,
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

  export const getGroupPosts = async(uid,groupId,page,limit)=>{
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
import moment from "moment";
import { Text } from "@chakra-ui/react";
//get post time
export const getTimeAgo = (createdAt) => {
  const postCreationTime = moment(createdAt);
  return postCreationTime.fromNow();
};

export const DataURIToBlob = (dataURI) => {
  const splitDataURI = dataURI.split(",");
  const byteString = splitDataURI[0].indexOf("base64") >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1]);
  const mimeString = splitDataURI[0].split(":")[1].split(";")[0];

  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);

  return new Blob([ia], { type: mimeString });
};
// readMore function
export const readMore = (showFullDescription, value, setShowFullDescription) => {
  console.log(value)
  if(!value){
    return 
  }else
  return (
    <>
      {showFullDescription ? value : value?.slice(0, 20)}
      {showFullDescription ? (
        <Text cursor={"pointer"} fontWeight={"700"} as={"span"} onClick={() => setShowFullDescription(false)}>
          ...read less
        </Text>
      ) : (
        <Text cursor={"pointer"} fontWeight={"700"} as={"span"} onClick={() => setShowFullDescription(true)}>
          ...read more
        </Text>
      )}
    </>
  );
};

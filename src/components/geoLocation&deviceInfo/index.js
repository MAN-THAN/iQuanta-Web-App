import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { postLoginActivity } from "@/api/security/loginActivity";
import { useSelector } from "react-redux";
import { isMobile, isDesktop, isTablet } from "react-device-detect";
import { getUserIp } from "@/api/security/loginActivity";
import request from "@/api/request";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function GetLocationAndDeviceInfo() {
  const [location, setLocation] = useState();
  const [deviceInfo, setDeviceInfo] = useState();
  const { _id: uid } = useSelector((state) => state.userData);
  console.log(isMobile, isDesktop);

  const mutation = useMutation({
    mutationFn: (payload) =>
      postLoginActivity(uid, { location: location?.city, deviceInfo: deviceInfo, ip: location?.ip }),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error.response.data.error.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res, variables, context) => {
      toast.success("Your location & IP address sent", {
        position: toast.POSITION.TOP_RIGHT,
      });
      //   queryClient.invalidateQueries({ queryKey: ["getUserNotifSettings"] });
      console.log(res);
    },
    onSettled: (data, error, variables, context) => {},
  });

  useEffect(() => {
    if (isMobile) {
      setDeviceInfo("mobile");
    } else if (isDesktop) {
      setDeviceInfo("desktop");
    } else if (isTablet) {
      setDeviceInfo("tablet");
    }
    getUserIp();
  }, []);
  console.log(location);

  useEffect(() => {
    if (location) {
      mutation.mutate(location);
    }
  }, [location, deviceInfo]);

  const getUserIp = async () => {
    const apiKey = process.env.NEXT_PUBLIC_IPDATA_API_KEY;
    try {
      const res = await request({
        url: `https://api.ipdata.co?api-key=${apiKey}`,
      });
      console.log(res);
      setLocation(res.data);
      return res;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  return (
    <>
      <ToastContainer />
    </>
  );
}

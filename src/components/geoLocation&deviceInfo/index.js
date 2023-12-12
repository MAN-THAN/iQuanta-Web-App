import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { postLoginActivity } from "@/api/security/loginActivity";
import { useSelector } from "react-redux";

export default function GetLocationAndDeviceInfo() {
  const [location, setLocation] = useState();
  const [deviceInfo, setDeviceInfo] = useState();
  const { _id: uid } = useSelector((state) => state.userData);
  const [ip, setIp] = useState();

  const mutation = useMutation({
    mutationFn: (payload) => postLoginActivity(uid, {location : location, deviceInfo : "laptop", ip : "54738957.5435"}),
    onMutate: (variables) => {
      return console.log("mutation is happening");
    },
    onError: (error, variables, context) =>
      toast.error(`${error.response.data.error.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      }),
    onSuccess: (res, variables, context) => {
      // toast.success(" successful!", {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
      //   queryClient.invalidateQueries({ queryKey: ["getUserNotifSettings"] });
      console.log(res);
    },
    onSettled: (data, error, variables, context) => {},
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      // Request the current position
      navigator.geolocation.getCurrentPosition(
        // Success callback
        function (position) {
          console.log("Latitude:", position.coords.latitude);
          console.log("Longitude:", position.coords.longitude);
          console.log("Accuracy:", position.coords.accuracy + " meters");
          setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
        },
        // Error callback
        function (error) {
          console.error("Error getting geolocation:", error.message);
        },
        // Optional options
        {
          enableHighAccuracy: true, // Use high-accuracy mode if available
          timeout: 5000, // Set a timeout (in milliseconds) for the request
          maximumAge: 0, // Force a fresh location retrieval
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);
  console.log(location);

  useEffect(() => {
    if(location){
        mutation.mutate(location)
    }
  }, [location])
}

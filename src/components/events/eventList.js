import React from "react";
import EventCard from "./eventCard";
import { getGroupEventList } from "@/api/feed/groups/exam";
import { useQuery } from "react-query";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const EventList = ({groupId}) => {
const [state, setState] = useState([{
  "title": "Sample Event Title",
  "description": "Sample Event description",
  "link": "https://example.com/live-stream",
  "eventType": "class",
  "groupId": "651bb666d5a5710add61ca62",
  "startTime": "08:00 AM",
  "endTime": "10:00 AM",
  "participants": [
    "651bb666d5a5710add61ca62",
    "655d8844b02648bc10c870a0",
     "652fad254725c125e4c13370",
    "655db0eb515187046b0279c7",
    "651bb8d8872019ec237f088c"
 ],
  "endDate": "2023-10-30T00:00:00.000Z",
  "startDate": "2024-12-15T00:00:00.000Z"
  
},{
    "title": "Sample Event Title 2",
    "description": "Sample Event description 2",
    "link": "https://example.com/live-stream",
    "eventType": "class",
    "groupId": "651bb666d5a5710add61ca62",
    "startTime": "08:00 AM",
    "endTime": "10:00 AM",
    "participants": [
      "651bb666d5a5710add61ca62",
      "655d8844b02648bc10c870a0",
       "652fad254725c125e4c13370",
      "655db0eb515187046b0279c7",
      "651bb8d8872019ec237f088c"
   ],
    "endDate": "2023-10-30T00:00:00.000Z",
    "startDate": "2024-12-15T00:00:00.000Z"
    
  }]);
// const { isLoading, data, isError, error, isPending, isSuccess } = useQuery({
//         queryKey: ["getGroupEventList", groupId],   
//         queryFn: () => getGroupEventList(groupId),
//         onError: (error, variables, context) =>
//           toast.error(`${error?.response?.data?.error?.message || "some error"}`, {
//             position: toast.POSITION.TOP_RIGHT,
//           }),
//         //onSuccess: (res) => setState(res.data.data.eventList),
//         onSuccess: (res) => setState([]),
//       });
console.log("eventList",state);
  return (
    state?.map((event,index)=>{
        return <EventCard data={event} onButtonClick={() => router.push(`/event/${event._id}`)}/>
    })
  );
};

export default EventList;

import React from "react";
import { Timeline } from "antd";

const ExamTabDetails = () => {
  return (
    <>
      <div className="flex justify-between p-2">
        <div className="">
          <div className="p-3">
            <p className=" text-sm font-inter text-gray-700">
              CAT 2021 registration is likely to begin in July and close by the end of September. CAT 2021 result will
              be announced in the first week of January 2022.
            </p>
          </div>

          <div className="">
            <h6 className=" text-base text-gray-700 font-semibold">Exam Dates & Registration</h6>

            <div className="overflow-y-scroll  mt-4  scroll-smooth">
              <Timeline
                items={[
                  {
                    color: "green",
                    pending: "4",
                    children: "Create a services site 2015-09-01",
                  },
                  {
                    pending: "4",
                    color: "green",
                    children: "Solve initial network problems 2015-09-01",
                  },
                  {
                    pending: "4",
                    color: "green",
                    children: "Technical testing 2015-09-01",
                  },
                  {
                    pending: "4",
                    color: "green",
                    children: "Network problems being solved 2015-09-01",
                  },
                  {
                    pending: "4",
                    color: "green",
                    children: "Create a services site 2015-09-01",
                  },

                  {
                    color: "green",
                    pending: "4",
                    children: "Solve initial network problems 2015-09-01",
                  },

                  { 
                    color: "green", 
                    pending: "4",
                    children: "Technical testing 2015-09-01"
                     },

                  { 
                    color: "green",
                    pending: "4",
                     children: "Network problems being solved 2015-09-01" 
                     },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamTabDetails;

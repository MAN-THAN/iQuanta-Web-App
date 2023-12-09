import Image from "next/image";
import React from "react";
import { BsImages } from "react-icons/bs";

const AddComment = () => {
  return (
    <div className="rounded-lg  bg-white border w-full mx-auto mt-2">
      <div className="w-full p-3">
        <form className="rounded-md border-2">
          <div className="flex items-center border-teal-500 py-2">
            <Image
              alt="img"
              className="rounded-md ms-3"
              width={40}
              height={40}
              src="/images/profile.jpg"
            />
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Add a comment"
            />
            <button className="hover:text-blue-500 w-1/5  py-2 outline-none focus:shadow-outline">
              <div className="flex items-center justify-center gap-2 text-sm font-semibold">
                <BsImages />
                <span> Post</span>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddComment;

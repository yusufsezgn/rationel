/* eslint-disable @next/next/no-img-element */
import React from "react";

const User = ({ name, username, description, avatar, surname }) => {
  return (
    <div className="w-full sm:h-24 h-20 border-b-2 border-b-white border-opacity-10 px-8 flex items-center justify-start hover:bg-gray-700 transition-all">
      <div className="flex items-center gap-4 w-full">
        <div className="w-14 h-14 rounded-full relative">
          <img src={avatar} className="rounded-full w-full h-full object-cover" alt="" />
        </div>
        <div className="flex flex-col items-start justify-center gap-1 w-1/2">
          <span className="text-lg font-semibold text-white">
            {name} {surname}
          </span>
          <span className="text-sm font-medium text-white opacity-50">
            {username}
          </span>
        </div>
      </div>
    </div>
  );
};

export default User;

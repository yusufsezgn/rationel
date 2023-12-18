import React from "react";
import OutsideClickHandler from "react-outside-click-handler";

const Post = ({ setPost }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-50 after:content-[''] after:z-0 after:w-screen after:h-screen after:bg-white after:opacity-20 after:absolute after:top-0 after:left-0 first-of-type:h-screen flex items-center justify-center">
      <div className="w-full h-full relative flex items-center justify-center">
        <OutsideClickHandler
          onOutsideClick={() => {
            setPost(false);
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative md:w-[570px] md:h-[640px] bg-white rounded-md z-50 shadow-2xl"></div>
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default Post;

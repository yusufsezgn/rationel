import React, { useState } from "react";
import Logo from "./Logo";
import { GoPerson } from "react-icons/go";
import { BiHelpCircle } from "react-icons/bi";

import { RiHomeLine, RiSearch2Line } from "react-icons/ri";
import { TbListSearch } from "react-icons/tb";
import Link from "next/link";
import { useSession } from "next-auth/react";
import New from "./New";
import Post from "./Post";

const Sidebar = () => {
  const { data: session } = useSession();
  const [post, setPost] = useState(false);

  return (
    <div className="sm:w-[5%] w-[15%] h-full border-r-2 sm:border-l-2 border-l-white border-r-white border-opacity-20 flex flex-col items-center fixed">
      <New setPost={setPost} />
      <div className="w-full h-1/5 flex items-center justify-center">
        <Logo />
      </div>
      <div className="w-full flex flex-col gap-6 items-center justify-center h-4/5">
        <div className="sm:w-16 sm:h-16 w-10 h-10 bg-none grid place-content-center hover:bg-gray-700 rounded-full transition-all cursor-pointer">
          <Link href={"/fyp/"}>
            <RiHomeLine className="w-7 h-7 text-white" />
          </Link>
        </div>
        <div className="sm:w-16 sm:h-16 w-10 h-10 bg-none grid place-content-center hover:bg-gray-700 rounded-full transition-all cursor-pointer">
          <Link href={"/fyp/search/"}>
            <RiSearch2Line className="w-7 h-7 text-white" />
          </Link>
        </div>
        <div className="sm:w-16 sm:h-16 w-10 h-10 bg-none grid place-content-center hover:bg-gray-700 rounded-full transition-all cursor-pointer">
          <Link href={"/fyp/philosophers"}>
            <TbListSearch className="w-7 h-7 text-white" />
          </Link>
        </div>
        <div className="sm:w-16 sm:h-16 w-10 h-10 bg-none grid place-content-center hover:bg-gray-700 rounded-full transition-all cursor-pointer">
          <Link href={"/fyp/contact/"}>
            <BiHelpCircle className="w-7 h-7 text-white" />
          </Link>
        </div>
        <div className="sm:w-16 sm:h-16 w-10 h-10 bg-none grid place-content-center hover:bg-gray-700 rounded-full transition-all cursor-pointer">
          <Link href={`/fyp/profile/${session?.user?._doc._id}`}>
            <GoPerson className="w-7 h-7 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

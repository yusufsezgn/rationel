import Card from "@/components/Card";
import Comment from "@/components/Comment";
import New from "@/components/New";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

const Index = () => {
  const [posts, setPosts] = useState([]);

  const {data: session} = useSession()

  const router = useRouter()

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/`);
      setPosts(res?.data.posts);
    };

    if(!session) {
      router.push("/")
    }

    getData();
  });

  return (
    <div className="sm:w-1/2 w-full h-full flex mx-auto">
      <Sidebar />
      <div className="w-[90%] ml-[15%] mx-auto h-full sm:border-r-2 border-none border-r-white border-opacity-20">
        <div className="w-full sm:h-20 h-16 border-b-2 border-b-white border-opacity-20 flex items-center justify-between px-8">
          <span className="sm:text-3xl text-2xl font-medium text-white">Ana sayfa</span>
          <div className="flex items-center gap-3 hover:bg-gray-700 h-14 w-14 rounded-full justify-center transition-all">
            <Link href={"/fyp/search/"}>
              <RiSearch2Line className="sm:w-8 sm:h-8 w-6 h-6 text-white" />
            </Link>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col-reverse items-start">
          {posts?.map((item, index) => {
            return (
              <Card
                userInfos={item?.userInfos}
                description={item?.description}
                time={item?.createdAt}
                philosopher={item?.philosopher}
                linkOpen={item?.linkOpen}
                commentOpen={item?.commentOpen}
                comments={item?.comments}
                image={item?.image}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;

/* eslint-disable @next/next/no-img-element */
import Input from "@/components/Input";
import Sidebar from "@/components/Sidebar";
import User from "@/components/User";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

const Index = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/`);
        setUsers(res?.data?.users);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  });

  const filtered = users.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(user.toLocaleLowerCase());
    });
  });

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  });

  return (
    <div className="sm:w-1/2 w-full h-full flex mx-auto">
      <Sidebar />
      <div className="w-[90%] ml-[15%] mx-auto h-screen sm:border-r-2 border-none border-r-white border-opacity-20">
        <div className="w-full sm:h-20 h-auto py-4 border-b-2 border-b-white border-opacity-20 sm:flex sm:flex-row flex-col items-center justify-between px-8 gap-5">
          <div className="sm:w-1/4 w-full h-full flex items-center">
            <span className="sm:text-3xl text-2xl font-medium text-white">
              Kullanıcı ara
            </span>
          </div>
          <div className="flex items-center gap-3 w-full justify-start mt-5">
            <input
              type="text"
              className="w-full h-11 rounded-full outline-none px-5 flex items-center bg-none placeholder:text-sm transition-all text-sm"
              placeholder="Kullanıcı aramak için yazın."
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="w-full h-auto flex flex-col items-start">
          {filtered?.map((item, index) => {
            return (
              <User
                key={index}
                name={item.name}
                surname={item.surname}
                username={item.username}
                description={item.description}
                avatar={item.avatar}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;

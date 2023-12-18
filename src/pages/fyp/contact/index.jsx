import Input from "@/components/Input";
import Sidebar from "@/components/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Index = () => {

  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if(!session) {
      router.push("/")
    }
  })

  return (
    <div className="sm:w-1/2 w-full h-full flex mx-auto">
      <Sidebar />
      <div className="w-[90%] ml-[15%] mx-auto h-screen sm:border-r-2 border-r-white border-opacity-20">
        <div className="w-full h-20 border-b-2 border-b-white border-opacity-20 flex items-center justify-between px-8">
          <div className="w-full h-full flex items-center">
            <span className="text-3xl font-medium text-white">
              Destek verin.
            </span>
          </div>
        </div>
        <form
          action="https://formspree.io/f/meqbybpn"
          method="POST"
          className="w-full h-auto flex flex-col items-start px-8 gap-8"
        >
          <div className="w-full h-auto mt-10 mb-5 flex items-center justify-start">
            <span className="text-2xl font-medium text-white">
              Görüş ve önerilerinizi kısaca yazın.
            </span>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div className="w-full relative">
              <Input
                placeholder={"johndoe@example.com"}
                type={"email"}
                name = {"email"}
                label={"Mail adresinizi girin."}
              />
            </div>
            <div className="flex flex-col items-start gap-3 w-full relative">
              <span className="text-lg font-medium text-white">
                Mesajınızı yazın.
              </span>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Lorem ipsum dolor sit amet"
                className="w-full bg-white rounded h-24 px-4 py-2 text-gray-700 focus:outline-secondary focus:outline-8 transition-all focus:border-secondary"
              ></textarea>
            </div>
          </div>
          <div className="w-full h-auto flex items-center justify-end">
            <button
              type="submit"
              className="sm:px-10 px-6 text-white rounded py-2 text-lg bg-secondary hover:bg-opacity-75 transition-all"
            >
              Gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;

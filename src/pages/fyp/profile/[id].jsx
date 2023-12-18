/* eslint-disable @next/next/no-img-element */
import Input from "@/components/Input";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  MdDateRange,
  MdFavoriteBorder,
  MdOutlineSquare,
  MdSquare,
} from "react-icons/md";
import { RiImageAddFill } from "react-icons/ri";
import { toast } from "react-toastify";
import { IoIosLogOut } from "react-icons/io";

const Index = () => {
  const { data: session } = useSession();
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState(session?.user?._doc.name);
  const [surname, setSurname] = useState(session?.user?._doc.surname);
  const [username, setUsername] = useState(session?.user?._doc.username);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [description, setDescription] = useState(
    session?.user?._doc.description
  );

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "rationel"); // Cloudinary'de oluşturduğunuz yükleme ön ayarı

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/yusuff/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      console.log(data);
      setImageUrl(data.url);
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };

  const handlesubmit = async () => {
    try {
      const values = {
        description: description,
        avatar: imageUrl,
        name: name,
        surname: surname,
        username: username,
        password: newPassword,
      };
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/user/${session?.user?._doc._id}`,
        values
      );
      console.log(res);
    } catch (error) {
      toast.error(error);
    }
  };

  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  });

  const logOut = async () => {
    await signOut();
  };

  return (
    <div className="sm:w-1/2 w-full h-full flex mx-auto">
      <Sidebar />
      <div className="w-[75%] ml-[15%] h-full sm:border-r-2 border-r-white border-opacity-20">
        <div className="w-full h-20 sm:border-b-2 border-b-white border-opacity-20 flex items-center pl-8">
          <div className="sm:w-3/5 w-0 hidden h-full flex items-center justify-center gap-4">
            <img
              src={session?.user?._doc.avatar}
              className="rounded-full w-14 h-14 object-cover sm:block hidden"
              alt=""
            />
            <div className="w-auto h-full flex flex-col gap-1 items-start justify-center">
              <span className="text-lg font-medium text-white">
                {session?.user?._doc.name}
              </span>
              <span className="text-sm font-medium text-white opacity-50">
                {session?.user?._doc.username}
              </span>
            </div>
          </div>
          <div className="sm:w-2/5 w-11/12 h-full flex items-center justify-start">
            <span className="sm:text-3xl text-2xl  font-medium text-white">
              Merhaba, {session?.user?._doc.name}.
            </span>
          </div>
          <div className="w-1/12 h-full flex items-center justify-end">
            <IoIosLogOut className="w-10 h-10 text-white" onClick={logOut} />
          </div>
        </div>
        <div className="w-full h-auto flex flex-col px-8 my-12 gap-8">
          <div className="w-full h-auto sm:flex sm:flex-row flex-col items-center sm:justify-between justify-center">
            <div className="w-full h-auto flex items-center gap-5">
              <img
                src={session?.user?._doc.avatar}
                className="rounded-full shadow-md sm:w-36 sm:h-36 w-28 h-28 object-cover"
                alt=""
              />
              <div className="flex flex-col items-start justify-center gap-2 w-1/4">
                <span className="text-2xl font-semibold text-white">
                  {session?.user?._doc.name}
                </span>
                <span className="text-base opacity-50 font-medium text-white">
                  {session?.user?._doc.username}
                </span>
              </div>
            </div>
            <div className="sm:w-1/2 w-full sm:px-0 px-8 h-auto flex flex-col items-center justify-center sm:mt-0 mt-14 gap-5">
              <div className="flex items-center gap-4 sm:w-64 w-auto">
                <MdDateRange className="w-7 h-7 text-white" />
                <span className="text-lg font-medium text-white">
                  {new Date(session?.user?._doc.createdAt).getDate().toString()}
                  {"."}
                  {Number(
                    new Date(session?.user?._doc.createdAt).getMonth() + 1
                  ).toString()}
                  {"."}
                  {new Date(session?.user?._doc.createdAt)
                    .getFullYear()
                    .toString()}
                </span>
              </div>
              <div className="flex items-center gap-4 sm:w-64 w-auto">
                <MdOutlineSquare className="w-7 h-7 text-white" />
                <span className="text-lg font-medium text-white">
                  {session?.user?._doc.posts} gönderi
                </span>
              </div>
            </div>
          </div>
          <div className="w-full h-1 bg-white opacity-20 rounded-full mx-auto"></div>
          <div className="w-3/4 h-auto flex items-center justify-start">
            <span className="text-lg font-medium text-white">
              {session?.user?._doc.description}
            </span>
          </div>
          <div className="sm:w-3/4 w-full h-auto flex flex-col items-start justify-normal">
            <div className="w-full flex items-center justify-start">
              <span className="text-lg font-medium text-white">
                Profili düzenle
              </span>
            </div>
            <div className="w-1/4 h-1 rounded-full bg-secondary my-5"></div>
            <div className="w-full h-auto flex flex-col gap-8 items-start">
              <div className="flex flex-col items-start justify-start gap-5">
                <div className="w-full h-auto flex items-start justify-start">
                  <span className="text-base font-medium text-white">
                    Profil resmini değiştir
                  </span>
                </div>
                <div className="relative">
                  <label className="cursor-pointer flex items-center justify-center">
                    <div className="w-20 h-20 top-0 left-0 absolute bg-cardBack rounded-full flex items-center justify-center">
                      <RiImageAddFill className="w-6 h-6 text-customPrimary absolute z-50 text-white" />
                    </div>
                    <input
                      onChange={(e) => uploadImage(e)}
                      type="file"
                      className="hidden"
                    />
                  </label>
                  <div>
                    <img
                      src={imageUrl}
                      className="rounded-full shadow-md w-20 h-20 object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <form
                onSubmit={handlesubmit}
                className="flex flex-col items-start justify-start gap-6 w-full h-auto"
              >
                <div className="w-full h-auto flex items-start justify-start">
                  <span className="text-base font-medium text-white">
                    Diğer bilgilerin
                  </span>
                </div>
                <div className="flex items-center gap-5 flex-wrap w-full">
                  <div className="w-full flex flex-col gap-5">
                    <div className="w-full sm:flex sm:flex-row flex-col gap-5">
                      <div className="flex flex-col gap-2 w-full">
                        <span className="text-base font-medium text-white">
                          İsim
                        </span>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          className="bg-white appearance-none border-2 rounded h-9 px-4 w-full text-gray-700 leading-tight focus:outline-secondary focus:outline-8 transition-all focus:border-secondary"
                        />
                      </div>
                      <div className="flex flex-col gap-2 w-full sm:mt-0 mt-5">
                        <span className="text-base font-medium text-white">
                          Soyisim
                        </span>
                        <input
                          type="text"
                          value={surname}
                          onChange={(e) => {
                            setSurname(e.target.value);
                          }}
                          className="bg-white appearance-none border-2 rounded h-9 px-4 w-full text-gray-700 leading-tight focus:outline-secondary focus:outline-8 transition-all focus:border-secondary"
                        />
                      </div>
                    </div>
                    <div className="w-full flex-col gap-2">
                      <span className="text-base font-medium text-white">
                        Kullanıcı adı
                      </span>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                        className="bg-white appearance-none mt-2 border-2 rounded h-9 px-4 w-full text-gray-700 leading-tight focus:outline-secondary focus:outline-8 transition-all focus:border-secondary"
                      />
                    </div>
                    <div className="w-full hidden flex gap-5">
                      <div className="flex flex-col gap-2 w-1/2">
                        <span className="text-base font-medium text-white">
                          Eski parola
                        </span>
                        <input
                          type="text"
                          value={oldPassword}
                          onChange={(e) => {
                            setOldPassword(e.target.value);
                          }}
                          className="bg-white appearance-none border-2 rounded h-9 px-4 w-full text-gray-700 leading-tight focus:outline-secondary focus:outline-8 transition-all focus:border-secondary"
                        />
                      </div>
                      <div className="flex flex-col gap-2 w-1/2">
                        <span className="text-base font-medium text-white">
                          Yeni parola
                        </span>
                        <input
                          type="text"
                          value={newPassword}
                          onChange={(e) => {
                            setNewPassword(e.target.value);
                          }}
                          className="bg-white appearance-none border-2 rounded h-9 px-4 w-full text-gray-700 leading-tight focus:outline-secondary focus:outline-8 transition-all focus:border-secondary"
                        />
                      </div>
                    </div>
                    <div className="w-full flex-col gap-2">
                      <span className="text-base font-medium text-white">
                        Açıklama
                      </span>
                      <input
                        type="text"
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                        className="bg-white appearance-none mt-2 border-2 rounded h-9 px-4 w-full text-gray-700 leading-tight focus:outline-secondary focus:outline-8 transition-all focus:border-secondary"
                      />
                    </div>
                    <div className="w-full flex items-center justify-end">
                      <button
                        type="submit"
                        onClick={() => {
                          handlesubmit();
                        }}
                        className="sm:w-1/4 w-3/5 h-10 bg-secondary rounded-md hover:opacity-75 transition-all text-white font-medium"
                      >
                        Kaydet
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

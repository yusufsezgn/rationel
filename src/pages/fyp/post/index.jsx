import Sidebar from "@/components/Sidebar";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Index = () => {
  const [description, setDescription] = useState("");
  const { data: session } = useSession();
  const [image, setImage] = useState("");
  const [philosopher, setPhilosopher] = useState("");
  const [checkboxValues, setCheckboxValues] = useState({
    link: false,
    comment: false,
  });

  const router = useRouter();

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxValues({
      ...checkboxValues,
      [checkboxName]: !checkboxValues[checkboxName],
    });
  };

  const onSubmitFunc = async () => {
    setImage(`${philosopher.toLowerCase()}.jpg`);

    const valuess = {
      description: description,
      image: image,
      comments: [],
      userInfos: {
        name: session?.user._doc.name,
        surname: session?.user._doc.surname,
        username: session?.user._doc.username,
        avatar: session?.user._doc.avatar,
        email: session?.user._doc.email,
        id: session?.user._doc._id,
      },
      philosopher: philosopher,
      commentOpen: checkboxValues.comment,
      linkOpen: checkboxValues.link,
    };

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/posts/new/`,
        valuess
      );
      toast.success("Shared !");
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  });

  return (
    <div className="sm:w-1/2 w-full h-full flex mx-auto">
      <Sidebar />
      <div className="w-[90%] ml-[15%] mx-auto h-screen sm:border-r-2 border-r-white border-opacity-20">
        <div className="w-full h-20 border-b-2 border-b-white border-opacity-20 flex items-center justify-between px-8">
          <span className="text-3xl font-medium text-white">Yeni Gönderi</span>
        </div>
        <form
          onSubmit={onSubmitFunc}
          className="w-full h-auto flex flex-col items-start"
        >
          <div className="w-full h-auto flex items-center justify-start p-8">
            <span className="text-2xl font-medium text-white">
              İnsanları felsefik sözlerinle etkile.
            </span>
          </div>
          <div className="w-1/2 bg-secondary rounded-full h-1 ml-8"></div>
          <div className="flex flex-col w-full p-8 gap-8">
            <div className="w-full h-auto flex flex-col items-start justify-center gap-4">
              <label for="message" class="block text-lg font-medium text-white">
                Mesajın
              </label>
              <textarea
                id="message"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                rows="4"
                class="block px-3 py-2 w-full text-base text-black transition-all bg-white rounded-lg border border-gray-300 focus:ring-secondary focus:border-secondary"
                placeholder="İnsanlara ne düşündüğünü yaz. (En fazla 120 karakter)"
              ></textarea>
            </div>
            <div className="w-full h-auto flex gap-5 items-center">
              <div className="sm:w-1/2 w-full">
                <label
                  for="philosophers"
                  class="block mb-2 text-lg font-medium text-white"
                >
                  Söz sahibini seç.
                </label>
                <select
                  id="philosophers"
                  value={philosopher}
                  onChange={(e) => {
                    setPhilosopher(e.target.value);
                  }}
                  class="bg-white text-black text-base rounded-lg focus:ring-secondary focus:border-secondary block w-full px-3 py-2"
                >
                  <option selected>Filozof seç...</option>
                  <option value="Sokrates">Sokrates</option>
                  <option value="Pisagor">Pisagor</option>
                  <option value="Aristoteles">Aristoteles</option>
                  <option value="Herakleitos">Herakleitos</option>
                  <option value="Platon">Platon</option>
                  <option value="Kullanıcı sözü">Kendi sözüm</option>
                </select>
              </div>
              <div class="hidden flex items-center justify-center py-2 mt-9 w-1/2">
                <div className="w-1/2 h-auto flex items-center justify-center">
                  <input
                    id="comment"
                    type="checkbox"
                    checked={checkboxValues.comment}
                    onChange={() => handleCheckboxChange("comment")}
                    class="w-4 h-4 text-secondary bg-white border-white rounded focus:ring-secondary "
                  />
                  <label
                    for="comment"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Yorumlar açık
                  </label>
                </div>
                <div className="w-1/2 h-auto flex items-center justify-center">
                  <input
                    id="link"
                    type="checkbox"
                    checked={checkboxValues.link}
                    onChange={() => handleCheckboxChange("link")}
                    class="w-4 h-4 text-secondary bg-white border-white rounded focus:ring-secondary "
                  />
                  <label
                    for="link"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Paylaşım açık
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full h-auto flex items-center justify-end">
              <button
                type="submit"
                className="sm:w-1/5 w-1/2 h-12 bg-secondary rounded-full text-white hover:opacity-75 transition-all"
              >
                Paylaş
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;

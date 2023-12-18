import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import { FaRegStar } from "react-icons/fa";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Index = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [favorites, setFavorites] = useState();

  useEffect(() => {
    const getData = async () => {
      setFavorites(session?.user?._doc._favorites);
    };

    if (!session) {
      router.push("/");
    }

    getData();
  });

  return (
    <div className="sm:w-1/2 w-full h-full flex mx-auto">
      <Sidebar />
      <div className="w-[90%] ml-[15%] mx-auto h-screen sm:border-r-2 border-r-white border-opacity-20">
        <div className="w-full sm:h-20 h-16 border-b-2 border-b-white border-opacity-20 flex items-center justify-between px-8">
          <div className="sm:w-1/2 w-full h-full flex items-center">
            <span className="sm:text-3xl text-2xl font-medium text-white">
              Bilinen filozoflar
            </span>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col items-start border-b-2 border-white">
          <div className="w-full h-80 relative">
            <Image
              src={"/img/sokrates.jpg"}
              alt="sokrates"
              objectFit="cover"
              layout="fill"
              className="brightness-75"
            />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center flex-col gap-5 lg:opacity-0 lg:hover:opacity-100 transition-all">
              <div className="w-full h-full flex flex-col justify-center items-center gap-3 transition-all">
                <span className="sm:text-4xl text-3xl font-semibold text-white">
                  Sokrates
                </span>
                <span className="sm:text-lg text-base font-medium text-white text-center w-5/6 mx-auto">
                  Sokrates, Antik Yunan filozofudur. Heykeltıraş Sophroniskos`un
                  ve Ebe Fenarete`nin oğludur. Yunan felsefesinin
                  kurucularındandır.{" "}
                  <a
                    href="https://tr.wikipedia.org/wiki/Sokrates"
                    target="_blank"
                    className="underline hover:no-underline transition-all"
                  >
                    Devamı için...
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col items-start border-b-2 border-white">
          <div className="w-full h-80 relative">
            <Image
              src={"/img/pisagor.jpg"}
              alt="sokrates"
              objectFit="cover"
              layout="fill"
              className="brightness-75"
            />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center flex-col gap-5 lg:opacity-0 lg:hover:opacity-100 transition-all">
              <div className="w-full h-full flex flex-col justify-center items-center gap-3 transition-all">
                <span className="sm:text-4xl text-3xl font-semibold text-white">
                  Pisagor
                </span>
                <span className="sm:text-lg text-base font-medium text-white text-center w-5/6 mx-auto">
                  Sisamlı Pisagor, Antik İyonya`nın en ünlü düşünürlerinden
                  birisidir. Yunan düşünür ve Pisagorculuğun kurucusudur.{" "}
                  <a
                    href="https://tr.wikipedia.org/wiki/Pisagor"
                    target="_blank"
                    className="underline hover:no-underline transition-all"
                  >
                    Devamı için...
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col items-start border-b-2 border-white">
          <div className="w-full h-80 relative">
            <Image
              src={"/img/aristo.jpg"}
              alt="sokrates"
              objectFit="cover"
              layout="fill"
              className="brightness-75"
            />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center flex-col gap-5 lg:opacity-0 lg:hover:opacity-100 transition-all">
              <div className="w-full h-full flex flex-col justify-center items-center gap-3 transition-all">
                <span className="sm:text-4xl text-3xl font-semibold text-white">
                  Aristoteles
                </span>
                <span className="sm:text-lg text-base font-medium text-white text-center w-5/6 mx-auto">
                  Aristoteles veya kısaca Aristo, Antik Yunanistan`da klasik
                  dönem aralığında yaşamını sürdürmüş olan Yunan filozof ve
                  bilge.{" "}
                  <a
                    href="https://tr.wikipedia.org/wiki/Aristoteles"
                    target="_blank"
                    className="underline hover:no-underline transition-all"
                  >
                    Devamı için...
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col items-start border-b-2 border-white">
          <div className="w-full h-80 relative">
            <Image
              src={"/img/herakleitos.jpg"}
              alt="sokrates"
              objectFit="cover"
              layout="fill"
              className="brightness-75"
            />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center flex-col gap-5 lg:opacity-0 lg:hover:opacity-100 transition-all">
              <div className="w-full h-full flex flex-col justify-center items-center gap-3 transition-all">
                <span className="sm:text-4xl text-3xl font-semibold text-white">
                  Herakleitos
                </span>
                <span className="sm:text-lg text-base font-medium text-white text-center w-5/6 mx-auto">
                  Efesli Heraklitos, Efes`te yaşamış Sokrates öncesi Yunan
                  filozof. Efes`in yerlisi olduğu ve babasının adının Bloson
                  olduğu gibi detaylar dışında hayatı hakkında pek az şey
                  bilinmektedir.{" "}
                  <a
                    href="https://tr.wikipedia.org/wiki/Heraklitos"
                    target="_blank"
                    className="underline hover:no-underline transition-all"
                  >
                    Devamı için...
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col items-start border-b-2 border-white">
          <div className="w-full h-80 relative">
            <Image
              src={"/img/platon.jpg"}
              alt="sokrates"
              objectFit="cover"
              layout="fill"
              className="brightness-75"
            />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center flex-col gap-5 lg:opacity-0 lg:hover:opacity-100 transition-all">
              <div className="w-full h-full flex flex-col justify-center items-center gap-3 transition-all">
                <span className="sm:text-4xl text-3xl font-semibold text-white">
                  Platon
                </span>
                <span className="sm:text-lg text-base font-medium text-white text-center w-5/6 mx-auto">
                  Efesli Heraklitos, Efes`te yaşamış Sokrates öncesi Yunan
                  filozof. Efes`in yerlisi olduğu ve babasının adının Bloson
                  olduğu gibi detaylar dışında hayatı hakkında pek az şey
                  bilinmektedir.{" "}
                  <a
                    href="https://tr.wikipedia.org/wiki/Platon"
                    target="_blank"
                    className="underline hover:no-underline transition-all"
                  >
                    Devamı için...
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

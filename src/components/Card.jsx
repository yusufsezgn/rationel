/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { FaRegComment, FaRegHeart, FaRegShareSquare } from "react-icons/fa";
import Comment from "./Comment";
import { toast } from "react-toastify";

const Card = ({
  userInfos,
  description,
  time,
  philosopher,
  linkOpen,
  commentOpen,
  comments,
  image,
}) => {
  const [commentShow, setCommentShow] = useState(false);
  const [phil, setPhil] = useState(philosopher.toLowerCase());

  return (
    <div className="w-full h-auto border-b-2 border-b-white border-opacity-10">
      {commentShow === true && <Comment setCommentShow={setCommentShow} />}
      <div className="w-full h-auto p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 w-full justify-start">
            <div className="w-full h-auto rounded-full relative flex items-center gap-6">
              <div className="w-1/4 h-auto flex items-center justify-start">
                <img
                  src={userInfos?.avatar}
                  alt="profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full w-14 h-14 object-cover"
                />
              </div>
              <div className="flex flex-row w-3/4 mx-auto items-center justify-start">
                <span className="text-lg font-semibold text-white hover:underline underline-offset-2 cursor-pointer">
                  {userInfos?.name} {userInfos?.surname}
                </span>
                <span className="text-sm font-medium text-white opacity-60">
                  {userInfos?.username}
                </span>
              </div>
            </div>
            {/* <div className="flex items-center gap-2 w-full">
              <div className="w-1/2 flex items-center justify-start">
                <span className="text-sm font-medium text-white opacity-60">
                  {userInfos?.username}
                </span>
              </div>
            </div> */}
          </div>
        </div>
        <div className="w-full h-auto flex mt-6 gap-6 relative z-0">
          <div className="w-full h-auto flex flex-col items-start gap-3 z-0">
            <span className="text-lg font-medium text-white">
              `{description}`
            </span>
            <div className="w-full h-auto relative rounded-lg z-0">
              <img
                src={
                  philosopher === "Kullanıcı sözü"
                    ? userInfos.avatar
                    : `/img/${phil}.jpg`
                }
                alt=""
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute w-full h-full top-0 left-0 flex items-end bg-cardBack rounded-lg justify-end px-10 py-6 bg-[rgba(0, 0, 0, 0.3)] transition-all">
                <span className="text-3xl font-semibold text-white">
                  {philosopher}
                </span>
              </div>
            </div>
          </div>
          <div className="hidden w-auto h-80 my-auto flex flex-col items-center justify-center gap-5">
            {commentOpen && (
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => {
                  setCommentShow(true);
                }}
              >
                <FaRegComment className="w-6 h-6 text-white opacity-75 hover:opacity-100 transition-all" />
                <span className="text-white font-medium text-lg opacity-75">
                  {comments}
                </span>
              </div>
            )}
            {linkOpen && (
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => {
                  toast.success("Link kopyalandı.");
                }}
              >
                <FaRegShareSquare className="w-6 h-6 text-white opacity-75 hover:opacity-100 transition-all" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

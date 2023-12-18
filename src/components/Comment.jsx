/* eslint-disable @next/next/no-img-element */
import { RxCross2 } from "react-icons/rx";
import OutsideClickHandler from "react-outside-click-handler";

const Comment = ({ setCommentShow }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-50 after:content-[''] after:w-screen after:h-screen after:bg-white after:opacity-20 after:absolute after:top-0 after:left-0 first-of-type:h-screen flex items-center justify-center">
      <div className="w-full h-full relative flex items-center justify-center">
        <OutsideClickHandler
          onOutsideClick={() => {
            setCommentShow(false);
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative md:w-[570px] md:h-[640px] bg-white rounded-md z-50 shadow-2xl">
              <div className="w-full h-14 border-b-2 border-black px-5 py-3 flex items-center justify-between">
                <span className="text-2xl font-medium">Yorumlar</span>
                <RxCross2
                  className="w-7 h-7 text-black hover:text-secondary cursor-pointer"
                  onClick={() => {
                    setCommentShow(false);
                  }}
                />
              </div>
              <div className="w-full h-auto max-h-[460px] flex flex-col gap-5 overflow-y-scroll">
                <div className="flex items-center h-20 border-b border-opacity-30 px-5 py-3">
                  <div className="w-2/5 h-full flex items-center justify-start gap-3">
                    <img
                      src="https://placehold.co/54x54"
                      className="rounded-full object-cover"
                      alt=""
                    />
                    <span className="text-lg font-semibold text-black">
                      Yusuf Sezgin
                    </span>
                  </div>
                  <div className="w-3/5 h-full flex items-center justify-center">
                    <span className="text-sm font-medium text-black">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Excepturi, sunt!
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full h-24 absolute bottom-3 flex items-center justify-start px-5">
                <div className="w-4/5 flex items-center gap-3">
                  <img
                    src="https://placehold.co/54x54"
                    className="rounded-full object-cover shadow-sm"
                    alt=""
                  />
                  <input
                    type="text"
                    placeholder="Lorem ipsum dolor sit amet"
                    name=""
                    id=""
                    className="bg-white appearance-none border-2 rounded h-10 px-4 w-4/5 text-gray-700 leading-tight focus:outline-secondary focus:outline-8 transition-all focus:border-secondary"
                  />
                </div>
                <div className="w-1/5 h-10 flex items-center justify-center gap-2">
                  <span className="text-xl font-medium text-black hover:text-secondary transition-all cursor-pointer hover:underline">
                    Paylaş
                  </span>
                </div>
              </div>
            </div>
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default Comment;

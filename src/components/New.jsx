import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

const New = ({ setPost }) => {
  return (
    <div className="bg-secondary rounded-full sm:w-12 sm:h-12 w-10 h-10 shadow-lg z-50 grid place-content-center absolute bottom-3 hover:opacity-75 transition-all cursor-pointer">
      <Link href={"/fyp/post/"}>
        <FaPlus className="sm:w-6 sm:h-6 w-5 h-5 text-white" />
      </Link>
    </div>
  );
};

export default New;

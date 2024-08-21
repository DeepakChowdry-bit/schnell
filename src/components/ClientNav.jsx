import Link from "next/link";
import { GrFingerPrint } from "react-icons/gr";
import { ImUpload } from "react-icons/im";
import { MdOutlineLogout } from "react-icons/md";
import { Button } from "./ui/button";
const ClientNav = () => {
  return (
    <>
      <div className="flex items-center justify-center h-20 fixed w-full z-10">
        <div className={`flex items-center justify-between w-94 md:w-88`}>
          <div className="flex items-center gap-1 font-black text-xl">
            <GrFingerPrint className="text-2xl" />
            <h4 className="hidden sm:flex">Schnell</h4>
          </div>
          <div className="flex items-center justify-center gap-5 md:gap-8">
            <div className="bg-gradient-to-tr from-indigo-500 to-orange-300 p-[2.4px] rounded-full md:h-14 h-11 cursor-pointer">
              <div
                className={`flex h-full w-full items-center justify-center back rounded-full px-4 md:px-8 bg-white`}
              >
                <>
                  <Link
                    href={"/client/upload"}
                    className="flex items-center gap-2"
                  >
                    <ImUpload className="md:text-xl font-black text-base" />
                    <h3 className="md:text-lg font-medium text-sm flex items-center gap-1.5">
                      Upload <span className="hidden sm:flex">documents</span>
                    </h3>
                  </Link>
                </>
              </div>
            </div>
            <div>
              <Button variant='outline' className='rounded-full'>
                <MdOutlineLogout className="md:text-xl" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientNav;

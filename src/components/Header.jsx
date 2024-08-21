import React from "react";
import { GrFingerPrint } from "react-icons/gr";
import { Button } from "./ui/button";
import { GoSearch } from "react-icons/go";
import { MdOutlineMyLocation } from "react-icons/md";
import SigninButton from "./SigninButton";
import { ImUpload } from "react-icons/im";
import Link from "next/link";
import { MdSpaceDashboard } from "react-icons/md";

const Header = ({ forClient, setforClient }) => {
  return (
    <>
      <div className="flex items-center justify-center h-24 fixed w-full z-10">
        <div
          className={`flex items-center justify-between w-94 md:w-88  ${
            !forClient ? "text-zinc-50" : "text-zinc-950"
          }`}
        >
          <div className="flex items-center gap-1 font-black text-xl">
            <GrFingerPrint className="text-3xl" />
            <h4 className="hidden sm:flex">Schnell</h4>
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-6">
            <div class="bg-gradient-to-tr from-indigo-500 to-orange-300 p-[2.4px] rounded-full md:h-14 h-11 cursor-pointer">
              <div
                className={`flex h-full w-full items-center justify-center back rounded-full px-4 md:px-8 ${
                  forClient ? "bg-white" : "bg-black"
                }`}
              >
                {forClient ? (
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
                ) : (
                  <>
                    <Link
                      href={"/shop/signin"}
                      className="flex items-center gap-2"
                    >
                      <MdSpaceDashboard className="md:text-xl font-black text-base" />
                      <h3 className="md:text-lg font-medium text-sm flex items-center gap-1.5">
                        <span className="hidden sm:flex">Go to </span>Dashboard
                      </h3>
                    </Link>
                  </>
                )}
              </div>
            </div>

            <SigninButton forClient={forClient} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

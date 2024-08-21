import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SigninButton = ({ forClient }) => {
  return (
    <>
      {forClient ? (
        <>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="default"
                    className={`rounded-full md:h-14 px-6 md:text-base font-semibold text-sm tracking-wide h-11 ${
                      !forClient && "bg-white text-zinc-950"
                    }`}
                  >
                    Sign in
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Sign in</SheetTitle>
                    <SheetDescription>
                      Get yourself on Schnell by one click
                    </SheetDescription>
                  </SheetHeader>
                  <div className="my-4 flex flex-col gap-4">
                    <Link href={"/client"} className="w-full">
                      <Button
                        variant="secondary"
                        className="flex items-center gap-2  w-full"
                      >
                        <FcGoogle />
                        Google
                      </Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Mobile */}
            <div className="flex sm:hidden">
              <Drawer>
                <DrawerTrigger asChild>
                  <Button
                    variant="default"
                    className={`rounded-full md:h-14 px-6 md:text-base font-semibold text-sm tracking-wide h-11 ${
                      !forClient && "bg-white text-zinc-950"
                    }`}
                  >
                    Sign in
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="mx-auto w-full max-w-sm md:h-72">
                    <DrawerHeader>
                      <DrawerTitle>Sign in</DrawerTitle>
                      <DrawerDescription>
                        Get yourself on Schnell by one click
                      </DrawerDescription>
                    </DrawerHeader>
                    <div>
                      <Link href={"/client"} className="w-full flex justify-center">
                        <Button
                          variant="secondary"
                          className="flex items-center gap-2 w-90"
                        >
                          <FcGoogle />
                          Google
                        </Button>
                      </Link>
                    </div>
                    <DrawerFooter></DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default SigninButton;

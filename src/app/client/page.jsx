import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen ">
        <div className="flex flex-col md:items-center justify-between w-93 md:w-88 gap-4">
          <div className="space-y-2">
            <h3 className="text-xs md:text-base">Welcome Deepak</h3>
            <h1 className="font-bold text-3xl md:text-7xl">
              Get your documents printed
            </h1>
          </div>
          <main className="flex flex-col gap-10 md:items-center justify-center w-full">
            <div className="space-y-4 md:text-center">
              <p className="text-muted-foreground text-xs md:text-base">
                We offer a wide range of printing services to meet your needs.
              </p>
              <ul className="flex flex-col md:flex-row gap-5 text-muted-foreground text-xs md:text-base">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-primary" />
                  High-quality printing
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-primary" />
                  Fast turnaround times
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-primary" />
                  Affordable pricing
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-primary" />
                  Secure document handling
                </li>
              </ul>
            </div>
            <div className="w-full flex justify-center">
              <Button className="rounded-full md:h-14 px-5 md:text-base font-medium text-sm tracking-wide h-14 bg-gradient-to-r from-indigo-500 to-indigo-300 font-aven md:w-60 w-full">
                Upload documents
              </Button>
              
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default page;

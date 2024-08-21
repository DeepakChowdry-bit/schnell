"use client";
import React, { useState } from "react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = ({ forClient, setforClient }) => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div
          className={`flex flex-col md:justify-end justify-center w-93 md:w-88 gap-1 h-5/6 md:h-4/6 ${
            !forClient ? "text-zinc-50" : "text-zinc-950"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-8 h-5/6">
              <div className="flex items-center space-x-2 uppercase ">
                <Label
                  htmlFor="clients"
                  className="font-semibold font-aven text-xs md:text-base tracking-wider"
                >
                  For{" "}
                  <span
                    className={`${
                      forClient
                        ? "bg-gradient-to-r from-indigo-500 to-orange-300 bg-clip-text text-transparent"
                        : "text-zinc-50"
                    }`}
                  >
                    Clients
                  </span>
                </Label>
                <Switch
                  id="for"
                  className="bg-black"
                  onClick={() => {
                    setforClient(!forClient);
                  }}
                />
                <Label
                  htmlFor="shops"
                  className={`font-semibold font-aven text-xs md:text-base tracking-wider ${
                    !forClient
                      ? "bg-gradient-to-r from-indigo-500 to-orange-300 bg-clip-text text-transparent"
                      : ""
                  }`}
                >
                  For Shops
                </Label>
              </div>
              <div className="flex flex-col gap-3">
                {!forClient ? (
                  <>
                    <h2 className="text-4xl md:text-7xl font-bold">
                      Online platform
                      <br /> <span className="">for your shop</span>{" "}
                    </h2>
                    <p className="md:text-xl text-sm font-medium text-muted-foreground">
                      Register your shop on — Schnell network.
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="text-4xl md:text-7xl font-bold">
                      Convenience <br /> <span className="">begins here</span>{" "}
                    </h2>
                    <p className="md:text-xl text-sm font-medium text-muted-foreground">
                      Get your documents printed — on time.
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-muted-foreground md:w-[720px] md:h-[460px] w-full h-60 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

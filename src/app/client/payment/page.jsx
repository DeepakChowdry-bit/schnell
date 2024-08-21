"use client";
import React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaRupeeSign } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { SiPhonepe } from "react-icons/si";
const page = () => {
  return (
    <>
      <div className="flex min-h-[100dvh] items-center justify-center bg-background py-24 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-evenly gap-3 w-95 md:w-3/5 py-4 bg-white shadow rounded-md">
          <Card className="md:w-3/6 h-5/6 border-none">
            <CardHeader>
              <h3 className="font-semibold">Payment Details</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Card holder name</Label>
                <Input placeholder="As per card" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="card">Card number</Label>
                <Input placeholder="xxxx xxxx xxxx xxxx" required />
              </div>
              <div className="flex items-center gap-3">
                <div className="space-y-2 w-1/2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input placeholder="mm / yy" required />
                </div>
                <div className="space-y-2 w-1/2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input type="number" placeholder="x x x" required />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-between gap-4">
              <Button type="submit" className="w-full h-14">
                Continue
              </Button>
            </CardFooter>
          </Card>
          <Card className="md:w-2/5 w-95 h-5/6 py-4">
            <CardContent className="space-y-4 px-4">
              <div>
                <div className="bg-muted-foreground w-full h-60 rounded-md relative flex justify-center">
                  <div className="w-90 bg-white flex items-center h-16 absolute -bottom-4 px-2 rounded-lg border gap-3">
                    <div className="h-5/6 rounded-md w-12 border justify-center flex items-center">
                      <FaRupeeSign />
                    </div>
                    <div>
                      <h3>Your order</h3>
                      <p>99</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-between gap-4">
              <Input className='h-14' placeholder='Your UPI ID'/>
              <Button type="submit" className="w-full bg-purple-800 h-14">
                Continue with <SiPhonepe className="mx-2 text-lg" />
              </Button>
              <Button
                size="lg"
                className="w-full h-14 bg-zinc-100 text-zinc-900"
              >
                Continue with <FcGoogle className="mx-1 text-lg" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default page;

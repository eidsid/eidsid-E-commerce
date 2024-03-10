import Image from "next/image";
import React from "react";
import SignUpbannerImage from "@/public/images/sign_up/phones.webp";
import { getLocaleInServer } from "@/shared/utils";
import { headers } from "next/headers";
import { getDict } from "../../../../../dictionaries/dictionaries";
import Client from "./RegisterClient";

const SignUp = async () => {
  const Local = getLocaleInServer(headers);
  const dectionary: any = await getDict(Local);
  const registrationDectionary = dectionary.pages.registration.signUp;
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className=" relative w-1/2 h-full flex justify-center items-center bg-gray-200">
        <Image src={SignUpbannerImage.src} fill alt="signUp banner" />
      </div>

      <div className="w-1/2 h-full  bg-gray-100 p-4">
        <Client dic={registrationDectionary} Local={Local} />
      </div>
    </div>
  );
};

export default SignUp;

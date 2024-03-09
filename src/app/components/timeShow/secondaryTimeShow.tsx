"use client";
import { TTime } from "@/shared/types";
import { calculateTimeLeft } from "@/shared/utils";
import { useEffect, useState } from "react";

export default function SecondaryTimeShow({
  date,
  dict,
}: {
  date: Date;
  dict: any;
}) {
  const [time, setTime] = useState<TTime>();
  const { days, minutes, seconds, hours } = dict;
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTimeLeft(date));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return time ? (
    <div className="flex items-center justify-between gap-1  min-w-80">
      <div
        className="flex flex-col bg-color-bg items-center justify-center  rounded-full 
       h-14 w-14"
      >
        <p className={"text-lg  text-black font-bold"}>{time.hours}</p>
        <p className="capitalize text-black  text-xs">{hours}</p>
      </div>
      <div
        className="flex flex-col bg-color-bg items-center justify-center  rounded-full 
       h-14 w-14"
      >
        <p className={"text-lg  text-black font-bold"}>{time.days}</p>
        <p className="capitalize text-black  text-xs">{days}</p>
      </div>
      <div
        className="flex flex-col bg-color-bg items-center justify-center  rounded-full 
       h-14 w-14"
      >
        <p className={"text-lg  text-black font-bold"}>{time.minutes}</p>
        <p className="capitalize text-black  text-xs">{minutes}</p>
      </div>
      <div
        className="flex flex-col bg-color-bg items-center justify-center  rounded-full 
       h-14 w-14"
      >
        <p className={"text-lg  text-black font-bold"}>{time.seconds}</p>
        <p className="capitalize text-black  text-xs">{seconds}</p>
      </div>
    </div>
  ) : null;
}

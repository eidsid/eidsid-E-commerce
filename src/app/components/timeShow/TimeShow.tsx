"use client";
import { TTime } from "@/shared/types";
import { calculateTimeLeft } from "@/shared/utils";
import { useEffect, useState } from "react";

export default function TimeShow({ date, dict }: { date: Date; dict: any }) {
  const [time, setTime] = useState<TTime>();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTimeLeft(date));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return time ? (
    <div className="flex  w-full   items-center gap-5 ">
      <div
        className="flex flex-col bg-color-bg items-center justify-center w-[80px] h-[80px] rounded-full -space-y-2
      max-2xl:w-[75px] max-2xl:h-[75px] gap-2"
      >
        <p className="capitalize  font-medium text-xs ">{dict.days}</p>
        <p className={"text-2xl font-extrabold"}>{time.days}</p>
      </div>
      <span className=" flex flex-col text-red-600 font-bold   text-xl">:</span>
      <div
        className="flex flex-col bg-color-bg items-center justify-center w-[80px] h-[80px] rounded-full -space-y-2
      max-2xl:w-[75px] max-2xl:h-[75px] gap-2"
      >
        <p className="capitalize  font-medium text-xs ">{dict.hours}</p>
        <p className={"text-2xl font-extrabold"}>{time.hours}</p>
      </div>
      <span className=" flex flex-col text-red-600 font-bold   text-xl">:</span>
      <div
        className="flex flex-col bg-color-bg items-center justify-center w-[80px] h-[80px] rounded-full -space-y-2
      max-2xl:w-[75px] max-2xl:h-[75px] gap-2"
      >
        <p className="capitalize  font-medium text-xs ">{dict.minutes}</p>
        <p className={"text-2xl font-extrabold"}>{time.minutes}</p>
      </div>
      <span className=" flex flex-col text-red-600 font-bold   text-xl">:</span>
      <div
        className="flex flex-col bg-color-bg items-center justify-center w-[80px] h-[80px] rounded-full -space-y-2
      max-2xl:w-[75px] max-2xl:h-[75px] gap-2"
      >
        <p className="capitalize  font-medium text-xs ">{dict.seconds}</p>
        <p className={"text-2xl font-extrabold"}>{time.seconds}</p>
      </div>
    </div>
  ) : null;
}

import { ArrowUpIcon } from "@heroicons/react/24/outline";
import React from "react";

const Arrow = ({ direction }: { direction: string }) => {
  let rotationClass = "";
  switch (direction) {
    case "left":
      rotationClass = "rotate-90";
      break;
    case "right":
      rotationClass = "-rotate-90";
      break;
    case "down":
      rotationClass = "rotate-180";
      break;
    default:
      rotationClass = "";
      break;
  }

  return <ArrowUpIcon className={` ${rotationClass}   h-5 w-5`} />;
};

export default Arrow;

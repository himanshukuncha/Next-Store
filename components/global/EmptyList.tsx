import React from "react";
import { cn } from "@/lib/utils";

const EmptyList = ({
  heading = "No Items Found.",
  className,
}: {
  heading?: string;
  className?: string;
}) => {
  return (
    <div>
      <h1 className={cn("text-xl", className)}>{heading}</h1>
    </div>
  );
};

export default EmptyList;

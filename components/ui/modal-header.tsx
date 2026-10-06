import React from "react";

type HaderProps = {
  title: string;
  className?: string;
};
export default function ModalHeader({ title, className = "" }: HaderProps) {
  return (
    <p className={`font-[700] text-[24px] text-[#04907E] text-center  ${className}`}>{title}</p>
  );
}

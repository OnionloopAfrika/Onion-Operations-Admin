import { WarningIcon } from "../icons/svgs";

type CaseProps = {
  title: string;
  desc: string;
};

export default function CaseNotis({ title, desc }: CaseProps) {
  return (
    <div className="p-[16px] bg-[] rounded-[16px] flex items-center gap-[16px] bg-[#FBEAE9] max-lg:flex-col">
      <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#F2BCBA] rounded-full">
        <WarningIcon color="#CB1A14" />
      </div>
      <div className="space-y-[4px]">
        <p className="font-[500] text-[14px] text-[#131313]">{title}</p>
        <p className="font-[400] text-[14px] text-[#6C6C6C]">{desc}</p>
      </div>
    </div>
  );
}

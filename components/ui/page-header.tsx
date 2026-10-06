type HeaderProps = {
  title: string;
  subtitle: string;
};

export default function PageHeader({ title, subtitle }: HeaderProps) {
  return (
    <div className="flex flex-col gap-[8px]">
      <p className="font-[600] text-[24px] text-[#131313]">{title}</p>
      <p className="font-[500] text-[16px] text-[#363636]">{subtitle}</p>
    </div>
  );
}

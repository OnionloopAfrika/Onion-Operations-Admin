type StatItem = {
  value: string;
  label: string;
  key: string;
};

export default function StatGrid({ label, value, key }: StatItem) {
  return (
    <div
      key={key}
      className="min-h-[90px] rounded-[8px] p-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-[8px] border border-[#E5E7EB] "
    >
      <p className="font-[600] text-[20px] text-[#000000]">{value}</p>
      <p className="font-[400] text-[10px] text-[#6C6C6C]">{label}</p>
    </div>
  );
}

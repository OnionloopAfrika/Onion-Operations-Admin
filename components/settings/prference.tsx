import Button from "../ui/button";
import Input from "../ui/input";

export default function Preference() {
  return (
    <div className="bg-white p-[24px] rounded-[20px] border border-[#E5E7EB] shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-[40px]">
      <div className="space-y-[16px]">
        <Input label="Default landing screen" placeholder=" Dashboard" />

        <Input label="Default date range" placeholder="30 days" />

        <Input label="Appearance" placeholder="Light" />
      </div>

      <Button variant="cashierSolid" size="cashierOutline">
        Save Preferences
      </Button>
    </div>
  );
}

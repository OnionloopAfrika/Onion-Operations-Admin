import Button from "../ui/button";
import Input from "../ui/input";

export default function Company() {
  return (
    <div className="bg-white p-[24px] rounded-[20px] border border-[#E5E7EB] shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-[40px]">
      <div className="space-y-[16px]">
        <Input label="Company legal name" placeholder=" Adaeze Nwosu Store" />

        <Input label="Customer support contact" placeholder="Support@AdaezeNwosu.co . 0700-Ada" />

        <Input label="Business hours" placeholder=" Mon-Sat, 8am-8pm WAT" />
      </div>

      <Button variant="cashierSolid" size="cashierOutline">
        Save company info
      </Button>
    </div>
  );
}

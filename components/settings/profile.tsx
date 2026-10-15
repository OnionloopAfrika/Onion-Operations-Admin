import Button from "../ui/button";
import Input from "../ui/input";

export default function Profile() {
  return (
    <div className="bg-white p-[24px] rounded-[20px] border border-[#E5E7EB] shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-[40px]">
      <div className="space-y-[16px]">
        <Input label="Full Name" placeholder="Adaeze Nwosu" />

        <Input label="Email" placeholder="b.unwosu@gmail.com" />

        <Input label="Phone" placeholder="+234 903 3414 253" />

        <div className="space-y-[4px]">
          <p className="font-[600] text-[12px] text-[#131313]">Password</p>
          <Button variant="outline" size="cashierOutline">
            <span className="text-[#6C6C6C]">Change password</span>
          </Button>
        </div>

        <div className="space-y-[4px]">
          <p className="font-[600] text-[12px] text-[#131313]">Two-factor Authentication</p>
          <Button variant="outline" size="cashierOutline">
            <span className="text-[#6C6C6C]">View backup codes</span>
          </Button>
        </div>
      </div>

      <Button variant="cashierSolid" size="cashierOutline">
        Save Changes
      </Button>
    </div>
  );
}

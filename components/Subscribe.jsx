import { Input } from "@/components/ui/input"
import { CustomBtn } from "./CustomBtn"
import { Button } from "./ui/button"

const Subscribe = () => {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-1/2 items-center gap-6 mt-6">
      <Input type="email" placeholder="Email" className="py-[26px] rounded-[16px] font-bold body-text" />
      <CustomBtn text="Subscribe" />
    </div>
  )
}

export default Subscribe
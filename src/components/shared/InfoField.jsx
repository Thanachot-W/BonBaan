import { cn } from "@/lib/utils"

const InfoField = ({ label, className, children}) => (
  <div className={cn("", className)}>
    <div className="label-text leading-none">{label}</div>
    <div className="flex w-full bg-white rounded-md h-10 px-4 py-2 border border-[--border] rounded-md mt-2">{children}</div>
  </div>
)
export default InfoField;
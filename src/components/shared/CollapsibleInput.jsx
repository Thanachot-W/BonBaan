import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { forwardRef, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const CollapsibleInput = forwardRef(({ header, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="bg-white rounded-md border border-[--border]"
      ref={ref}
      {...props}
    >
      <CollapsibleTrigger className="px-4 py-2 w-full [&>svg]:stroke-[--gray] flex justify-between items-center">
        {header}
        {isOpen ? <ChevronUp/> : <ChevronDown/> }
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 py-4 w-full border-t border-[--border]">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
});

export default CollapsibleInput;

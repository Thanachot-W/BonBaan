import { cn } from "@/lib/utils"
import React from "react";
import { Link } from "react-router";

const EditLink = React.forwardRef(({ className, to, ...props }, ref) => (
    <Link ref={ref} to={to} className={cn("btn btn-link p-0 h-min min-h-min", className)} {...props}>
      แก้ไข
    </Link>
  )
);
EditLink.displayName = "EditLink";

const DeleteLink = React.forwardRef(({ className, to, ...props }, ref) => (
  <Link ref={ref} to={to} className={cn("btn btn-link p-0 h-min min-h-min text-error", className)} {...props}>
    ลบ
  </Link>
)
);
DeleteLink.displayName = "DeleteLink";

export {
  EditLink,
  DeleteLink
};
import * as React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const ConfirmDeletionAlert = React.forwardRef(({ title, className, onConfirm, ...props }, ref) => (
  <AlertDialog className={className} {...props} ref={ref}>
    <AlertDialogTrigger className="btn btn-link p-0 h-min min-h-min text-error">ลบ</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>ยืนยันที่จะลบ "{title}" หรือไม่</AlertDialogTitle>
        <AlertDialogDescription>
          ถ้าคุณยืนยันแล้วจะไม่สามารถแก้ไขได้ ข้อมูลนี้จะถูกลบซึ่งอาจส่งผลต่อข้อมูลอื่น ๆ ในระบบได้
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>ยกเลิก</AlertDialogCancel>
        <AlertDialogAction onClick={onConfirm}>ยืนยันการลบ</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
));

export {ConfirmDeletionAlert}
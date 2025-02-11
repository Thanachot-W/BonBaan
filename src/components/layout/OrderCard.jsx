import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { CancelOrderForm, ConfirmOrderForm } from "../forms/orderForm";
import { useState } from "react";

const OrderCard = ({ data, onConfirm, onCancel }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between w-full">
          <h4>คำสั่งซื้อหมายเลข {data.id}</h4>
          <p className="font-normal text-sm">{data.date}</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          <span className="font-semibold">{data.name}</span> ต้องการ{" "}
          <span className="font-semibold">{data.type}</span> ที่{" "}
          <span className="font-semibold">{data.service}</span>
        </p>
        <p>{data.detail}</p>
      </CardContent>
      <CardFooter className="flex gap-2 justify-end">
        <ConfirmDialog
          onSubmit={onConfirm}
          trigger={<Button className="px-8">ยืนยัน</Button>}
        />
        <CancelDialog
          onSubmit={onCancel}
          trigger={
            <Button className="px-8" variant="destructive">
              ปฏิเสธ
            </Button>
          }
        />
      </CardFooter>
    </Card>
  );
};

const ConfirmDialog = ({ onSubmit, trigger }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>กรุณาใส่ข้อมูลเพื่อยืนยันคำสั่งซื้อ</DialogTitle>
          <DialogDescription>กรุณากำหนดราคาสำหรับคำสั่งซื้อ</DialogDescription>
        </DialogHeader>
        <ConfirmOrderForm
          closeDialog={() => setOpen(false)}
          onSubmit={onSubmit}
        >
          <DialogFooter>
            <Button type="submit">ยืนยัน</Button>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                ยกเลิก
              </Button>
            </DialogClose>
          </DialogFooter>
        </ConfirmOrderForm>
      </DialogContent>
    </Dialog>
  );
};

const CancelDialog = ({ onSubmit, trigger }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>กรุณาใส่ข้อมูลเพื่อยกเลิกคำสั่งซื้อ</DialogTitle>
          <DialogDescription>
            กรุณาเลือกเหตุผลการปฎิเสธคำสั่งซื้อ
            การปฎิเสธคำสั่งซื้ออาจทำให้ลูกค้าไม่พึงพอใจ
            ด้งนั้นกรุณาใส่เหตุผลประกอบเพิ่มเติม
          </DialogDescription>
        </DialogHeader>
        <CancelOrderForm closeDialog={() => setOpen(false)} onSubmit={onSubmit}>
          <DialogFooter>
            <Button type="submit">ยืนยัน</Button>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                ยกเลิก
              </Button>
            </DialogClose>
          </DialogFooter>
        </CancelOrderForm>
      </DialogContent>
    </Dialog>
  );
};

export default OrderCard;

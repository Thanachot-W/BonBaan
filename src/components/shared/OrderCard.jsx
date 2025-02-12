import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CancelOrderDialog, ConfirmOrderDialog } from "./orderDialog";

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
        <ConfirmOrderDialog
          onSubmit={onConfirm}
          trigger={<Button className="px-8">ยืนยัน</Button>}
        />
        <CancelOrderDialog
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

export default OrderCard;

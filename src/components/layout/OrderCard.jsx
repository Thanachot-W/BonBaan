import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
        <p>{data.name} ต้องการ {data.type} ที่ {data.service}</p>
        <p>{data.detail}</p>
      </CardContent>
      <CardFooter className="flex gap-2 justify-end">
        <Button className="px-8" onClick={onConfirm}>ยืนยัน</Button>
        <Button className="px-8" variant="destructive" onClick={onCancel}>
          ปฏิเสธ
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OrderCard;

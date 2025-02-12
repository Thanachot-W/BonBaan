import { Button } from "@/components/ui/button";
import CollapsibleInput from "../components/shared/CollapsibleInput";
import InfoField from "../components/shared/InfoField";
import {
  CancelOrderDialog,
  CompleteOrderDialog,
  OrderStatusDialog
} from "../components/shared/orderDialog";

const orderData = {
  id: "5c060f02",
  user: {
    name: "ราตรี พรสมหวัง",
    email: "ratee.porn@mail.com",
  },
  service: {
    name: "ท้าวเวสสุวรรณ วัดจุฬามณี",
  },
  type: { name: "บนบาน" },
  status: { name: "กำลังดำเนินการก" },
  wish: "ขอให้สุขภาพแข็งแรง",
  dueAt: new Date(Date.now()).toDateString(),
  createAt: new Date(Date.now()).toDateString(),
  price: "259",
  items: "สินค้า 1",
  transaction: {
    name: "ราตรี พรสมหวัง",
    location:
      "123/456 ซอยประชาอุทิศ 69 แขวงบางมด แขวงบางมด เขตทุ่งครุ จังหวัดกรุงเทพมหานคร 10140",
    date: new Date(Date.now()).toDateString(),
    status: "กำลังดำเนินการ",
    method: "QR code",
  },
};

const OrderPage = () => {
  const onCancel = () => {};
  const onConfirm = () => {};
  const onChangeStatus = () => {};

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="py-2 px-4 bg-white font-bold border border-[--border] rounded-md w-full">
          คำสั่งซื้อ {orderData.id}
        </div>
        {orderData.status.name === "กำลังดำเนินการ" ? (
          <CompleteOrderDialog
            onSubmit={onConfirm}
            trigger={<Button>สำเร็จคำสั่งซื้อ</Button>}
          />
        ) : (
          <OrderStatusDialog onSubmit={onChangeStatus} trigger={<Button>อัพเดตสถานะคำสั่งซื้อ</Button>}/>
        )}
        <CancelOrderDialog
          onSubmit={onCancel}
          trigger={<Button variant="destructive">ยกเลิกคำสั่งซื้อ</Button>}
        />
      </div>
      <CollapsibleInput header="ข้อมูลคำสั่งซื้อ">
        <div className="grid gap-4 grid-cols-5">
          <InfoField label="ผู้ซื้อ" className="col-span-3">
            {orderData.user.name} ({orderData.user.email})
          </InfoField>
          <InfoField label="สถานะ" className="col-span-2">
            {orderData.status.name}
          </InfoField>
          <InfoField label="ชื่อบริการ" className="col-span-2">
            {orderData.service.name}
          </InfoField>
          <InfoField label="ประเภท" className="col-span-1">
            {orderData.type.name}
          </InfoField>
          <InfoField label="วันที่สั่งซื้อ" className="col-span-2">
            {orderData.createAt}
          </InfoField>
          <InfoField label="คำขอ" className="col-span-3">
            {orderData.wish}
          </InfoField>
          <InfoField label="วันที่การบนสิ้นสุด" className="col-span-2">
            {orderData.dueAt}
          </InfoField>
          <InfoField label="รายการสินค้า" className="col-span-3">
            {orderData.items}
          </InfoField>
          <InfoField label="ราคา" className="col-span-2">
            {orderData.price} บาท
          </InfoField>
        </div>
      </CollapsibleInput>
      <div className="flex gap-4">
        <div className="w-full">
          <CollapsibleInput header="ข้อมูลใบเสร็จ">
            <div className="flex flex-col gap-3">
              <p>{orderData.transaction.name}</p>
              <p>{orderData.transaction.location}</p>
              <p>{orderData.transaction.method}</p>
              <p>{orderData.transaction.date}</p>
            </div>
          </CollapsibleInput>
        </div>
        <div className="w-full">
          <CollapsibleInput header="การชำระเงิน">
            <div className="grid gap-4 ">
              <InfoField label="ช่องทางการชำระเงิน">
                {orderData.transaction.method}
              </InfoField>
              <InfoField label="สถานะ">
                {orderData.transaction.status}
              </InfoField>
            </div>
          </CollapsibleInput>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;

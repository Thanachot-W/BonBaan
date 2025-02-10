import OrderCard from "../components/layout/OrderCard";

const inboxData = [
  {
    id: "1hb34yfgbe",
    date: new Date(Date.now()).toLocaleString(),
    name: "ราตรี พรสมหวัง",
    type: "บนบาน",
    service: "พระตรีมูรติ",
    detail: "ไข่ต้ม 100",
  },
  {
    id: "mb348u3jbe",
    date: new Date(Date.now()).toLocaleString(),
    name: "ราตรี พรสมหวัง",
    type: "แก้บน",
    service: "พระตรีมูรติ",
    detail: "ไก่ต้ม 20",
  },
];

const InboxPage = () => {
  const handelConfirm = (id) => {
    console.log("PUT" + id);
  };

  const handelCancel = (id) => {
    console.log("DELETE" + id);
  };

  return (
    <div className="space-y-4">
      {inboxData.map((item, index) => (
        <OrderCard
          key={index}
          data={item}
          onConfirm={() => handelConfirm(item.id)}
          onCancel={() => handelCancel(item.id)}
        />
      ))}
    </div>
  );
};

export default InboxPage;
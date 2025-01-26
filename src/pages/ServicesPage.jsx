import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableActionCell
} from "@/components/ui/table";
import { EditLink, DeleteLink } from "../components/shared/link";
import { Plus } from 'lucide-react';
import { Link } from "react-router";

// TODO: get data from api
// TODO: pagination
// TODO: sorting and filtering

const data = [
  {
    img: "https://farm4.staticflickr.com/3852/14447103450_2d0ff8802b_z_d.jpg",
    title: "test",
    category: "test",
    lastUpdateAt: Date.now()
  },
  {
    img: "https://farm4.staticflickr.com/3852/14447103450_2d0ff8802b_z_d.jpg",
    title: "test",
    category: "test",
    lastUpdateAt: Date.now()
  },
  {
    img: "https://farm4.staticflickr.com/3852/14447103450_2d0ff8802b_z_d.jpg",
    title: "test",
    category: "test",
    lastUpdateAt: Date.now()
  },
  {
    img: "https://farm4.staticflickr.com/3852/14447103450_2d0ff8802b_z_d.jpg",
    title: "test",
    category: "test",
    lastUpdateAt: Date.now()
  }
]

const ServicesPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex">
        <Link to={"./สร้างบริการใหม่"} className="btn btn-primary btn-md">
          <Plus />
          เพิ่มบริการใหม่
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[72px]">รูป</TableHead>
            <TableHead>ชื่อบริการ</TableHead>
            <TableHead>หมวดหมู่</TableHead>
            <TableHead>วันที่แก้ไขล่าสุด</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell><img src={row.img} alt="" className="aspect-square object-cover h-fit"/></TableCell>
                  <TableActionCell title={row.title}>
                    <EditLink to={''}/>
                    <DeleteLink to={''}/>
                  </TableActionCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.lastUpdateAt}</TableCell>
                </TableRow>
              ))
          }
        </TableBody>
      </Table>
    </div>
  );
};

export default ServicesPage;

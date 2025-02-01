import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableActionCell,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationFirst,
  PaginationLast,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { EditLink, DeleteLink } from "../components/shared/link";
import { Plus } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

// TODO: get data from api
// TODO: sorting and filtering

const response = {
  data: [
  {
    img: "https://farm4.staticflickr.com/3852/14447103450_2d0ff8802b_z_d.jpg",
    title: "test",
    category: "test",
    lastUpdateAt: Date.now(),
  },
  {
    img: "https://farm4.staticflickr.com/3852/14447103450_2d0ff8802b_z_d.jpg",
    title: "test",
    category: "test",
    lastUpdateAt: Date.now(),
  },
  {
    img: "https://farm4.staticflickr.com/3852/14447103450_2d0ff8802b_z_d.jpg",
    title: "test",
    category: "test",
    lastUpdateAt: Date.now(),
  },
  {
    img: "https://farm4.staticflickr.com/3852/14447103450_2d0ff8802b_z_d.jpg",
    title: "test",
    category: "test",
    lastUpdateAt: Date.now(),
  },
],
totalPage: 2,
currentPage: 1,
totalRecord: 8,
pageSize: 4};

const ServicesPage = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex">
        <Link to={"./insert"} className="btn btn-primary btn-md">
          <Plus />
          เพิ่มบริการใหม่
        </Link>
      </div>
      <div className="flex flex-col gap-2">
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
          {response.data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <img
                  src={row.img}
                  alt=""
                  className="aspect-square object-cover h-fit"
                />
              </TableCell>
              <TableActionCell title={row.title}>
                <EditLink to={""} />
                <DeleteLink to={""} />
              </TableActionCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.lastUpdateAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-between">
        <div className="flex items-center text-sm text-[--gray]">
          แสดง {response.data.length} จากทั้งหมด {response.totalRecord}
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationFirst isActive={response.currentPage === 1 ? false : true} />
            </PaginationItem>
            <PaginationItem>
              <PaginationPrevious isActive={response.currentPage === 1 ? false : true} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink size="sm">
                {page}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext isActive={response.currentPage ===  response.totalPage ? false : true} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLast isActive={response.currentPage ===  response.totalPage ? false : true} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      </div>
    </div>
  );
};

export default ServicesPage;

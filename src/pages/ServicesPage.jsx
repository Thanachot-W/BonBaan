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
import { EditLink } from "../components/shared/link";
import { Plus } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import { DeleteConfirmationAlert } from "../components/shared/alert";

// TODO: get data from api
// TODO: sorting and filtering

const response = {
  data: [
    {
      id: "e24d56a2-152d-4053-988d-dcaadeec966f",
      img: "https://picsum.photos/seed/1/200/200",
      title: "test",
      rating: 3.92,
      categories: [
        {
          id: "1",
          name: "ความรัก",
        },
        {
          id: "2",
          name: "สุขภาพ",
        },
        {
          id: "3",
          name: "การเงิน",
        },
      ],
      lastUpdateAt: new Date(Date.now()).toLocaleString(),
    },
    {
      id: "52a2adb6-1a90-44eb-aacb-4d7af9d76791",
      img: "https://picsum.photos/seed/2/200/200",
      title: "test",
      rating: 4.1,
      categories: [
        {
          id: "1",
          name: "ความรัก",
        },
        {
          id: "2",
          name: "สุขภาพ",
        },
        {
          id: "3",
          name: "การเงิน",
        },
      ],
      lastUpdateAt: new Date(Date.now()).toLocaleString(),
    },
    {
      id: "db7aedd1-6c64-4ea3-b48c-5f1bf47ef309",
      img: "https://picsum.photos/seed/3/200/200",
      title: "test",
      rating: 2.5,
      categories: [
        {
          id: "1",
          name: "ความรัก",
        },
        {
          id: "2",
          name: "สุขภาพ",
        },
        {
          id: "3",
          name: "การเงิน",
        },
      ],
      lastUpdateAt: new Date(Date.now()).toLocaleString(),
    },
    {
      id: "a774aa3f-e382-4661-9867-e76a13262c7c",
      img: "https://picsum.photos/seed/4/200/200",
      title: "test",
      rating: 4.6,
      categories: [
        {
          id: "1",
          name: "ความรัก",
        },
        {
          id: "2",
          name: "สุขภาพ",
        },
        {
          id: "3",
          name: "การเงิน",
        },
      ],
      lastUpdateAt: new Date(Date.now()).toLocaleString(),
    },
  ],
  totalPage: 2,
  currentPage: 1,
  totalRecord: 8,
  pageSize: 4,
};

const ServicesPage = () => {
  const [page, setPage] = useState(1);

  const deleteService = (id) => {
    console.log("DELETE:", id);
    // call DELETE API
  };

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
              <TableHead>คะแนน</TableHead>
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
                  <EditLink to={`/services/${row.id}`} />
                  <DeleteConfirmationAlert
                    title={row.title}
                    onConfirm={() => deleteService(row.id)}
                  />
                </TableActionCell>
                <TableCell> 
                  {row.categories.map((item) => item.name).join(" ")}
                </TableCell>
                <TableCell>{row.rating}</TableCell>
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
                <PaginationFirst
                  isActive={response.currentPage === 1 ? false : true}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationPrevious
                  isActive={response.currentPage === 1 ? false : true}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink size="sm">{page}</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  isActive={
                    response.currentPage === response.totalPage ? false : true
                  }
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLast
                  isActive={
                    response.currentPage === response.totalPage ? false : true
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

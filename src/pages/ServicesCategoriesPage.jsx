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
import { useState } from "react";

// TODO: get data from api

const response = {
  data: [
    {
      name: "Test",
      slug: "test",
      count: 0,
      lastUpdateAt: Date.now(),
    },
  ],
  totalPage: 1,
  currentPage: 1,
  totalRecord: 4,
  pageSize: 4,
};

const ServicesCategoriesPage = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="flex flex gap-4">
      <div className="flex flex-col gap-2 w-96">
        <h3>เพิ่มหมวดหมู่ใหม่</h3>
        {/* inputform */}
      </div>
      <div className="flex flex-col gap-2 w-full ">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ชื่อหมวดหมู่</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>จำนวน</TableHead>
              <TableHead>วันที่แก้ไขล่าสุด</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {response.data.map((row, index) => (
              <TableRow key={index}>
                <TableActionCell title={row.name}>
                  <EditLink to={""} />
                  <DeleteLink to={""} />
                </TableActionCell>
                <TableCell>{row.slug}</TableCell>
                <TableCell>{row.count}</TableCell>
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

export default ServicesCategoriesPage;

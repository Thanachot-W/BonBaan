import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableActionCell,
  TableFormCell,
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
import { useState } from "react";
import Rating from "../components/shared/Rating";

const reviewsData = {
  data: [
    {
      id: "1",
      username: "supppppp",
      service: { name: "test" },
      rating: 3.5,
      review: "so gooddd",
      createdAt: new Date(Date.now()).toLocaleString(),
    },
    {
      id: "2",
      username: "9lnwza007",
      service: { name: "test" },
      rating: 4,
      review: "ดี",
      createdAt: new Date(Date.now()).toLocaleString(),
    },
    {
      id: "3",
      username: "prayut",
      service: { name: "test" },
      rating: 1,
      review: "ทำงานช้ามาก ต้องปรับทัศนคติ",
      createdAt: new Date(Date.now()).toLocaleString(),
    },
    {
      id: "4",
      username: "Nida",
      service: { name: "test" },
      rating: 5,
      review: "ชอบมาก ได้แฟนตามที่ขอด้วยย",
      createdAt: new Date(Date.now()).toLocaleString(),
    },
  ],
  totalPage: 1,
  currentPage: 1,
  totalRecord: 4,
  pageSize: 4,
};

const ServicesReviewsPage = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="flex flex-col gap-4">
      {/* filter buttons */}
      <div className="flex flex-col gap-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ชื่อผู้ใช้</TableHead>
              <TableHead>ชื่อบริการ</TableHead>
              <TableHead>คะแนน</TableHead>
              <TableHead>รีวิว</TableHead>
              <TableHead className="w-48" >วันที่</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reviewsData.data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.username}</TableCell>
                <TableCell>{item.service.name}</TableCell>
                <TableCell>
                  <Rating value={item.rating} />
                </TableCell>
                <TableCell>{item.review}</TableCell>
                <TableCell>{item.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-between">
          <div className="flex items-center text-sm text-[--gray]">
            แสดง {reviewsData.data.length} จากทั้งหมด {reviewsData.totalRecord}
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationFirst
                  isActive={reviewsData.currentPage === 1 ? false : true}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationPrevious
                  isActive={reviewsData.currentPage === 1 ? false : true}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink size="sm">{page}</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  isActive={
                    reviewsData.currentPage === reviewsData.totalPage
                      ? false
                      : true
                  }
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLast
                  isActive={
                    reviewsData.currentPage === reviewsData.totalPage
                      ? false
                      : true
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

export default ServicesReviewsPage;

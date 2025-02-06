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
import {
  CreateCategoryForm,
  EditCategoryForm,
} from "../components/form/category-form";
import { ConfirmDeletionAlert } from "../components/shared/alert";

// TODO: get data from api

const response = {
  data: [
    {
      id: "1234",
      name: "Test",
      count: 0,
      lastUpdateAt: Date.now(),
    },
    {
      id: "1235",
      name: "Test2",
      count: 0,
      lastUpdateAt: Date.now(),
    },
  ],
  totalPage: 1,
  currentPage: 1,
  totalRecord: 4,
  pageSize: 4,
};

const deleteCategory = (id) => {
  console.log("DELETE:", id);
}

const ServicesCategoriesPage = () => {
  const [page, setPage] = useState(1);
  const [editedRow, setEditedRow] = useState("");

  return (
    <div className="flex gap-8">
      <div className="flex flex-col w-96 gap-8">
        <h3>เพิ่มหมวดหมู่ใหม่</h3>
        <CreateCategoryForm />
      </div>
      <div className="flex flex-col gap-2 w-full ">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ชื่อหมวดหมู่</TableHead>
              <TableHead>จำนวน</TableHead>
              <TableHead>วันที่แก้ไขล่าสุด</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {response.data.map((row, index) => (
              <TableRow key={row.id}>
                {editedRow === index ? (
                  <TableFormCell
                    colSpan={3}
                    title="แก้ไขหมวดหมู่"
                    form={
                      <EditCategoryForm
                        name={row.name}
                        onCancel={() => setEditedRow("")}
                      />
                    }
                  />
                ) : (
                  <>
                    <TableActionCell title={row.name}>
                      <button
                        className="btn btn-link p-0 h-min min-h-min"
                        onClick={() => setEditedRow(index)}
                      >
                        แก้ไข
                      </button>
                      <ConfirmDeletionAlert title={row.name} onConfirm={() => deleteCategory(row.id)}/>
                    </TableActionCell>
                    <TableCell>{row.count}</TableCell>
                    <TableCell>{row.lastUpdateAt}</TableCell>
                  </>
                )}
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

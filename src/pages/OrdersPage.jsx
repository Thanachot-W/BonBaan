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
import { Plus } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import FilterSelect from "@/components/ui/filterselect"; 
import SearchInput from "@/components/ui/searchinput"; 
import StatusBadge from "@/components/ui/statusbagde"; 

const response = {
  data: [
    { place:'เจ้าพ่อเห้งเจีย สวนผัก', id: 'a5201906', type: 'บนบาน', date: '23/10/2567', user: 'ราตรี พรหมหวัง', price: '89', status: 'ยกเลิก' },
    { place:'พระตีมูรติ', id: '8dd1e7a8', type: 'แก้บน', date: '18/10/2567', user: 'ราตรี พรหมหวัง', price: '159', status: 'กำลังดำเนินการ' },
    { place:'ท้าวเวสสุวรรณ วัดจุผามณี', id: '2f52b0c8', type: 'บนบาน', date: '12/10/2567', user: 'ราตรี พรหมหวัง', price: '259', status: 'รอรับออเดอร์' },
    { place:'พระตรีมูรติ', id: 'fd64bfae', type: 'แก้บน', date: '1/10/2567', user: 'ราตรี พรหมหวัง', price: '159', status: 'สำเร็จ' },
    { place:'พระตรีมูรติ', id: 'fd67bfae', type: 'แก้บน', date: '2/10/2567', user: 'ราตรี พรหมหวัง', price: '159', status: 'กำลังดำเนินการ' },
    { place:'เจ้าพ่อสัญหา', id: 'fd67bfae', type: 'แก้บน', date: '2/10/2567', user: 'ราตรี พรหมหวัง', price: '159', status: 'รอการยืนยัน' },
  ],
  totalPage: 2,
  currentPage: 1,
  totalRecord: 10,
  pageSize: 4,
};

const statusOptions = ['สถานะคำสั่งซื้อ', 'รอรับออเดอร์', 'กำลังดำเนินการ', 'รอการยืนยัน', 'สำเร็จ', 'ยกเลิก'];
const categoryOptions = ['ประเภท', 'บนบาน', 'แก้บน'];
const typeOptions = ['หมวดหมู่สินค้า', 'แพ็กเกจ', 'คำสั่งซื้อพิเศษ'];

const OrdersPage = () => {
  const [selectedStatus, setSelectedStatus] = useState('สถานะคำสั่งซื้อ');
  const [selectedCategory, setSelectedCategory] = useState('ประเภท');
  const [selectedType, setSelectedType] = useState('หมวดหมู่สินค้า');
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOrders = response.data.filter(order => {
    return (
      (selectedStatus === 'สถานะคำสั่งซื้อ' || order.status === selectedStatus) &&
      (selectedCategory === 'ประเภท' || order.type === selectedCategory) &&
      (selectedType === 'หมวดหมู่สินค้า' || order.type === selectedType) &&
      (order.place.includes(searchTerm) || order.id.includes(searchTerm) || order.type.includes(searchTerm) || order.date.includes(searchTerm) || order.user.includes(searchTerm) || order.price.includes(searchTerm) || order.status.includes(searchTerm))
    );
  });

  return (
    <div className="flex flex-col gap-4">
      {/* Filters */}
      <div className="flex items-center justify-between space-x-4">
        <div className="flex space-x-4">
          <FilterSelect
            options={statusOptions}
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          />
          <FilterSelect
            options={categoryOptions}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          />
          <FilterSelect
            options={typeOptions}
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          />
        </div>
        <div>
          <SearchInput
            placeholder="ค้นหาคำสั่งซื้อ" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <Table className="min-w-full table-auto">
          <TableHeader>
            <TableRow>
              <TableHead className="px-6 py-3">สถานที่</TableHead>
              <TableHead className="px-6 py-3">รหัสคำสั่งซื้อ</TableHead>
              <TableHead className="px-6 py-3">ประเภท</TableHead>
              <TableHead className="px-6 py-3">วันที่สั่งซื้อ</TableHead>
              <TableHead className="px-6 py-3">ชื่อผู้ใช้</TableHead>
              <TableHead className="px-6 py-3">ราคา</TableHead>
              <TableHead className="px-6 py-3">สถานะ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order, index) => (
              <TableRow key={index}>
                <TableCell className="px-6 py-4">{order.place}</TableCell>
                <TableCell className="px-6 py-4">{order.id}</TableCell>
                <TableCell className="px-6 py-4">{order.type}</TableCell>
                <TableCell className="px-6 py-4">{order.date}</TableCell>
                <TableCell className="px-6 py-4">{order.user}</TableCell>
                <TableCell className="px-6 py-4">{order.price}</TableCell>
                <TableActionCell className="px-6 py-4">
                  <StatusBadge status={order.status} />
                </TableActionCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>


      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-500">
          แสดง {filteredOrders.length} จากทั้งหมด {response.totalRecord}
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationFirst isActive={response.currentPage > 1} />
            </PaginationItem>
            <PaginationItem>
              <PaginationPrevious isActive={response.currentPage > 1} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink size="sm">
                {page}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext isActive={response.currentPage < response.totalPage} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLast isActive={response.currentPage < response.totalPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default OrdersPage;
/*const OrdersPage = () => {
  return (
    <div>
    </div>
  );
};

export default OrdersPage;*/

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

// Mocked data
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

const statusColors = {
  'สำเร็จ': 'text-green-600 border-green-600 bg-green-100',
  'ยกเลิก': 'text-red-600 border-red-600 bg-red-100',
  'กำลังดำเนินการ': 'text-blue-600 border-blue-600 bg-blue-100',
  'รอรับออเดอร์': 'text-yellow-600 border-yellow-600 bg-yellow-100',
  'รอการยืนยัน': 'text-yellow-400 border-yellow-400 bg-yellow-50',
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
          <select
            className="border rounded p-2"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <select
            className="border rounded p-2"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categoryOptions.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            className="border rounded p-2"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            {typeOptions.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="relative w-64">    
          <input
            type="text"
            className="border rounded p-2 w-64"
            placeholder="ค้นหาคำสั่งซื้อ" /*(สถานที่, รหัสคำสั่งซื้อ, ชื่อผู้ใช้)*/
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-gray-700 text-extrabold absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>  
      </div>

      {/* Orders Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>สถานที่</TableHead>
            <TableHead>รหัสคำสั่งซื้อ</TableHead>
            <TableHead>ประเภท</TableHead>
            <TableHead>วันที่สั่งซื้อ</TableHead>
            <TableHead>ชื่อผู้ใช้</TableHead>
            <TableHead>ราคา</TableHead>
            <TableHead>สถานะ</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredOrders.map((order, index) => (
            <TableRow key={index}>
              <TableCell>{order.place}</TableCell>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.type}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.user}</TableCell>
              <TableCell>{order.price}</TableCell>
              <TableActionCell 
                title={
                  <span 
                    className={`inline-block px-2 py-1 text-sm border rounded-lg ${
                      statusColors[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                }
              >
              </TableActionCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

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





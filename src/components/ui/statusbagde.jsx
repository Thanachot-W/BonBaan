import React from 'react';

const statusColors = {
  'สำเร็จ': 'text-green-600 border-green-600 bg-green-100',
  'ยกเลิก': 'text-red-600 border-red-600 bg-red-100',
  'กำลังดำเนินการ': 'text-blue-600 border-blue-600 bg-blue-100',
  'รอรับออเดอร์': 'text-yellow-600 border-yellow-600 bg-yellow-100',
  'รอการยืนยัน': 'text-yellow-400 border-yellow-400 bg-yellow-50',
};

const StatusBadge = ({ status }) => {
  return (
    <span
      className={`inline-block px-2 py-1 text-sm border rounded-lg ${
        statusColors[status]
      }`}
      style={{ display: 'block', visibility: 'visible' }}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
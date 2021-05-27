import React from 'react';
import { Pagination } from 'antd';

export default function PaginationQuizz() {
  return (
    <div>
      <>
        <Pagination
          total={85}
          showSizeChanger
          showQuickJumper
          showTotal={(total) => `Total ${total} items`}
        />
      </>
      ,
    </div>
  );
}

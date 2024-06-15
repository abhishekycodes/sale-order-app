import React, { useState } from 'react';
import SaleOrderList from '../component/SaleOrderList';

const CompletedSaleOrders = () => {
  const [completedOrders, setCompletedOrders] = useState([
    { orderName: 'Completed Order 1', orderAmount: 150 },
    { orderName: 'Completed Order 2', orderAmount: 250 },
  ]);

  return (
    <div>
      <h2>Completed Sale Orders</h2>
      <SaleOrderList orders={completedOrders} onEdit={() => {}} readOnly />
    </div>
  );
};

export default CompletedSaleOrders;

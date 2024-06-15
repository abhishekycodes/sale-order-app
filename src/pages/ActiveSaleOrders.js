import React, { useState } from 'react';
import SaleOrderList from '../component/SaleOrderList';
import SaleOrderForm from '../component/SaleOrderForm';

const ActiveSaleOrders = () => {
  const [orders, setOrders] = useState([
    { orderName: 'Order 1', orderAmount: 100 },
    { orderName: 'Order 2', orderAmount: 200 },
  ]);

  const handleCreateOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  const handleEditOrder = (updatedOrder) => {
    setOrders(orders.map((order) =>
      order.orderName === updatedOrder.orderName ? updatedOrder : order
    ));
  };

  return (
    <div className='text-center'>
      <h2>Active Sale Orders</h2>
      <button className=' btn btn-info mt-2' onClick={() => setOrders([])}>+ Sale Order</button>
      <SaleOrderList orders={orders} onEdit={handleEditOrder} />
      <h3>Create New Order</h3>
      <SaleOrderForm onSubmit={handleCreateOrder} />
    </div>
  );
};

export default ActiveSaleOrders;

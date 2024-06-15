import React, { useState } from 'react';
import SaleOrderForm from './SaleOrderForm';

const SaleOrderList = ({ orders, onEdit, readOnly = false }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  const handleEditClick = (order) => {
    setCurrentOrder(order);
    setIsEditing(true);
  };

  const handleEditSubmit = (updatedOrder) => {
    onEdit(updatedOrder);
    setIsEditing(false);
    setCurrentOrder(null);
  };

  return (
    <div className='text-center'>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            {order.orderName} - {order.orderAmount}
            {!readOnly && <button onClick={() => handleEditClick(order)} className='mt-2'>Edit</button>}
          </li>
        ))}
      </ul>
      {isEditing && (
        <div>
          <h3>Edit Order</h3>
          <SaleOrderForm initialData={currentOrder} onSubmit={handleEditSubmit} readOnly={readOnly} />
        </div>
      )}
    </div>
  );
};

export default SaleOrderList;

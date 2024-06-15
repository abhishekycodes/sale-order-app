import React, { useState } from 'react';

const SaleOrderForm = ({ initialData = {}, onSubmit, readOnly = false }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Order Name: </label>
        <input
          type="text"
          name="orderName"
          value={formData.orderName}
          onChange={handleChange}
          readOnly={readOnly}
        />
      </div>
      <div>
        <label>Order Amount: </label>
        <input className='me-2 mt-2'
          type="number"
          name="orderAmount"
          value={formData.orderAmount}
          onChange={handleChange}
          readOnly={readOnly}
        />
      </div>
      {!readOnly && <button className='btn btn-primary mt-2' type="submit">Submit</button>}
    </form>
  );
};

export default SaleOrderForm;

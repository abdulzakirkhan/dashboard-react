import React, { useEffect, useState } from 'react'



export default function Orders() {
  const BaseURL ="https://dummyjson.com/";
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`${BaseURL}carts`)
        .then((result) => {
            if (!result.ok) {
                throw new Error('Failed to fetch');
            }
            return result.json();
        })
        .then((response) => {
            setOrders(response.carts);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}, []);


  return (
    <div className="container-fluid">
      <h1 className="text-white">ORDERS</h1>
      <div className="row">
        <div className="col-md-12">
        <div className="card bg-transparent border-0 card-orders">
        <div className="card-body border-0">
              {orders.map((item,index) => (
                  <div className="card border-0 bg-transparent shadow-lg" key={index}>
                    <div className="card-header d-flex justify-content-between border-0">
                      <span class="badge text-bg-success custbadge">
                        <p className="text-white d-flex align-items-center gap-2"><span>Discounted:</span><span>{item.discountedTotal}</span></p>
                      </span>
                      <p className="d-flex align-items-center gap-3"><span className="text-white">totalQuantity:</span><span className="text-white">{item.totalQuantity}</span></p>
                      <span className="text-white">Total: {item.total}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

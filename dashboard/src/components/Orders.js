import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext"; 

const Orders = () => {
  const { refreshOrders } = useContext(GeneralContext); 
  const [allOrders, setAllOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:3002/allOrders");
      setAllOrders(res.data);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [refreshOrders]);

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((stock, index) => {
              const qty = stock.qty || 0;
              const avg = stock.avg || 0;
              const price = stock.price || 0;
              const day = stock.day || 0;

              const curVal = price * qty;
              const isProfit = curVal - avg * qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product || "-"}</td>
                  <td>{stock.name || "-"}</td>
                  <td>{qty.toFixed(2)}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{price.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curVal - avg * qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>
                    {day.toFixed ? day.toFixed(2) : day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {allOrders.length === 0 && (
        <div className="orders">
          <div className="no-orders">
            <p>You haven't placed any orders today</p>
            <Link to={"/"} className="btn">
              Get started
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;

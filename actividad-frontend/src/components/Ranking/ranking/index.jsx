import { useEffect, useState } from "react";
import "./style.css";

export const Ranking = ({ width, height }) => {
  const [summary, setSummary] = useState({
    totalOrders: 0,
    totalProducts: 0,
    totalSales: 0,
  });

  async function logJSONData() {
    const response = await fetch("/report-summary");
    const jsonData = await response.json();

    setSummary(() => {
      return jsonData;
    });
    console.log(jsonData.totalOrders);
    console.log(jsonData);
    console.log(summary);
  }

  useEffect(() => {
    logJSONData();
  }, []);

  return (
    <div className="products">
      <img
        src={"/assets/products/dress_a.jpg"}
        style={{ height: 500, width: 300, gap: 50 }}
      />

      <img
        src={"/assets/products/jacket_a.jpg"}
        style={{ height: 500, width: 300, gap: 50 }}
      />
      <img
        src={"/assets/products/jacket_b.jpg"}
        style={{ height: 500, width: 300 }}
      />

      <img
        src={"/assets/products/pant_a.jpg"}
        style={{ height: 500, width: 300 }}
      />
    </div>
  );
};

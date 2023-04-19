import { useEffect, useState } from "react";
import "./style.css";

export const Summary = ({ width, height }) => {
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
        <div className="summary-main">
            <div className="placeholder1">
                <div className="value">{summary.totalOrders}</div>
                <div>pedidos</div>
            </div>
            <div className="placeholder1">
                <div className="value">{summary.totalProducts}</div>
                <div>unidades</div>
            </div>
            <div className="placeholder1">
                <div className="value">{summary.totalSales}</div>
                <div>income</div>
            </div>
            {/* <div className="placeholder1">{summary.totalProducts} unidades</div>
            <div className="placeholder1">{summary.totalSales} income</div> */}
        </div>
    );
};

import DatePicker from "react-datepicker";
import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";

export const Filter = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [finishDate, setFinishDate] = useState(new Date());

    function filterQuery() {}

    const options = ["Ordenes", "Unidades", "Total"];
    const defaultOption = options[0];
    return (
        <div className="mainDivFilter">
            <h3>Ranking</h3>
            <div className="filterDiv">
                <div className="type">
                    <label>Tipo</label>
                    <div style={{ width: "200px" }}>
                        <Dropdown
                            options={options}
                            onChange={(date) => {
                                setStartDate(date);
                                filterQuery();
                            }}
                        />
                    </div>
                </div>
                <label>Fecha inicio</label>
                <DatePicker
                    selected={finishDate}
                    onChange={(date) => {
                        setFinishDate(date);
                        filterQuery();
                    }}
                />
                <label>Fecha fin</label>

                <DatePicker
                    selected={startDate}
                    onChange={(date) => {
                        setStartDate(date);
                        filterQuery();
                    }}
                />
            </div>
        </div>
    );
};

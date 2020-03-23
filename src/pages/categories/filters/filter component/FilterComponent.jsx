import React from "react";
import FilterItem from "./FilterItem";
import "./filters.css";

function FilterComponent({ filterName, filterLabels }) {
    return (
        <div className={`filter filter-${filterName}`}>
            <p>{filterName}:</p>
            <ul>
                {filterLabels.map(label => (
                    <FilterItem name={label} />
                ))}
            </ul>
        </div>
    );
}

export default FilterComponent;

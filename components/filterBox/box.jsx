import React from "react";

//COMPS
import Filter from "./filter";

const FilterBox = (props) => {
    return (
        <>
            <Filter data={props.data}></Filter>
        </>
    );
};

export default FilterBox;

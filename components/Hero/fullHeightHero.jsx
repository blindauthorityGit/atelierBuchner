import React from "react";

const FullHeightHero = (props) => {
    return (
        <div className=" h-[85vh] w-[90vw] max-w-[1680px] max-h-[960px] mt-8 lg:mt-12 mx-auto">{props.children}</div>
    );
};

export default FullHeightHero;

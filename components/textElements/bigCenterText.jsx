import React from "react";
import { H2, H4 } from "../typography";
import { P } from "../typography";

const BigCenterText = (props) => {
    return (
        <div className={`col-span-12 ${props.klasse}`}>
            <div className="w-[60%] mx-auto">
                <div className="text-primaryColor-400 font-sans text-2xl font-semibold leading-loose">{props.text}</div>
            </div>
        </div>
    );
};

export default BigCenterText;

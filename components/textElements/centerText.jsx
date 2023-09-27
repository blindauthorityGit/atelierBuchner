import React from "react";
import { H2, H4 } from "../typography";
import { P } from "../typography";

const CenterText = (props) => {
    return (
        <div className={`col-span-12 ${props.klasse}`}>
            <H4 klasse="text-primaryColor-500">{props.topLine}</H4>
            <H2 klasse="text-primaryColor-200">{props.headline}</H2>
            <div className="w-[60%] mx-auto">
                <P klasse="text-primaryColor-200">{props.text}</P>
            </div>
        </div>
    );
};

export default CenterText;

import React from "react";

const Filter = (props) => {
    return (
        <ul className="flex col-span-12">
            {props.data[0].leistungen.map((e, i) => {
                console.log(e);
                return (
                    <li
                        className="mr-12 text-primaryColor-100 font-sans opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
                        onClick={props.onClick}
                    >
                        {e.title}
                    </li>
                );
            })}
        </ul>
    );
};

export default Filter;

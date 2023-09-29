import React from "react";
import Link from "next/link";
const MainButton = (props) => {
    return (
        <Link href={props.link} className="w-full">
            <button
                disabled={props.disabled}
                className={`${props.klasse} ${
                    props.disabled ? "opacity-30" : null
                } bg-primaryColor-400 font-headline tracking-widest hover-underline-animation z-20 flex items-center justify-center text-primaryColor-50 py-4 text-lg sm:text-base sm:py-3 px-6 min-w-[10rem] w-full uppercase rounded-md`}
            >
                <span className=""> {props.children}</span>
            </button>
        </Link>
    );
};
export default MainButton;

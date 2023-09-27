// components/Typography.js
import React from "react";

const P = ({ children, klasse }) => {
    return (
        <p
            className={`text-xs sm:text-base font-sans tracking-wider leading-loose xl:leading-loose lg:text-sm xl:text-base ${klasse} font-regular `}
        >
            {children}
        </p>
    );
};

// Add more headline components for H3, H4, etc.

export { P };

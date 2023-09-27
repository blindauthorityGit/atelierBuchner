import React from "react";

const Section = (props) => {
    return (
        <section className={`pt-28 ${props.klasse}`}>
            <div className="container mx-auto grid grid-cols-12 gap-2">{props.children}</div>
        </section>
    );
};

export default Section;

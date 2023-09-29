import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import useInView

// FUNCTIONS
import calculateAspectRatio from "../../functions/calculateAspectRatio";
import urlFor from "../../functions/urlFor";

//COMPS
import MasonryElement from "./masonryElement";

const RegularGrid = (props) => {
    const [data, setData] = useState(null);
    const [visibleItems, setVisibleItems] = useState([]); // Store visible item indices

    useEffect(() => {
        console.log(props.data);
        setData(props.data);
    }, [props.data]);

    // Use the useInView hook to track visibility
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger once
        threshold: 0.1, // Adjust as needed
    });

    useEffect(() => {
        if (inView) {
            // If an item becomes visible, add its index to the list of visible items
            setVisibleItems((prevVisibleItems) => [...prevVisibleItems, data.length]);
        }
    }, [inView, data]);

    return (
        <>
            <div className="grid grid-cols-12 grid-rows-10 gap-2 h-full col-span-12">
                {data?.map((e, i) => {
                    return <MasonryElement klasse={"col-span-2 h-64"} data={e} />;
                })}
            </div>
        </>
    );
};

export default RegularGrid;

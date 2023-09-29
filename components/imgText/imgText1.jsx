import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

//Framer Motion
import { motion, useScroll, useAnimation } from "framer-motion";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

//components
import { GhostButton } from "../buttons";
import { H2, H3 } from "../typography/headlines";
import urlFor from "../../functions/urlFor";

const TextImg1 = (props) => {
    const ref = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    return (
        <>
            <div className={`col-span-5 relative h-[680px] ${props.order}`}>
                <Image src={urlFor(props.data.image).url()} alt={`Image `} layout="fill" objectFit="cover" />
                <div className="absolute">bubu</div>
            </div>

            <div className="col-span-7 px-16">{props.children}</div>
        </>
    );
};

export default TextImg1;

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// FUNCTIONS
import calculateAspectRatio from "../../functions/calculateAspectRatio";
import urlFor from "../../functions/urlFor";
const MasonryElement = (props) => {
    return (
        <motion.a
            layoutId={"LayoutIMG"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            href={`/galerie/${props.data.slug.current}`}
            className={`${props.klasse} relative cursor-pointer group overflow-hidden transition-all duration-300`}
            whileTap={{ scale: 0.95 }}
            onMouseOver={(e) => {
                e.currentTarget.children[1].classList.add("scale-in-ver-top");
                e.currentTarget.children[0].classList.add("slide-in-left");
            }}
            onMouseLeave={(e) => {
                e.currentTarget.children[1].classList.remove("scale-in-ver-top");
                e.currentTarget.children[1].classList.add("scale-out-ver-top");
                e.currentTarget.children[0].classList.remove("slide-in-left");
            }}
        >
            <div className="text absolute text-white z-20 font-headline font-thin text-2xl flex justify-center items-center h-full w-full opacity-0">
                {props.data.titel_Bild}
            </div>
            <div
                className="overlay w-full h-full bg-primaryColor-950 z-10 absolute opacity-0"
                onAnimationEnd={(e) => {
                    const target = e.target;
                    if (target.classList.contains("scale-out-ver-top")) {
                        target.classList.remove("scale-out-ver-top");
                    }
                }}
            ></div>
            <Image
                src={urlFor(props.data.image).url()}
                alt={`Image `}
                // alt={`Image ${data ? data["1/1"][0].image.titel_Bild : null}`}
                layout="fill"
                objectFit="cover"
                className="opacity-0 group-hover:scale-110 transition-all duration-300"
                onLoad={(e) => {
                    e.target.classList.remove("opacity-0");
                    e.target.classList.add("scale-in-center");
                }}
                onAnimationEnd={(e) => {
                    e.target.classList.remove("scale-in-center");
                }}
            />
        </motion.a>
    );
};

export default MasonryElement;

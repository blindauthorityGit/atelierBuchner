import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import urlFor from "../../functions/urlFor";
import { motion, useAnimation } from "framer-motion"; // Import motion and useAnimation
import { PortableText } from "@portabletext/react";

const KursCard = (props) => {
    const cardRef = useRef();
    const cardControls = useAnimation(); // Create animation controls for the card
    const titleControls = useAnimation(); // Create animation controls for the title
    const textControls = useAnimation(); // Create animation controls for the title
    const overlayControls = useAnimation(); // Create animation controls for the title

    const [cardHeight, setCardHeight] = useState(0);

    useEffect(() => {
        setCardHeight(cardRef.current.clientWidth);
    }, [cardRef.current]);

    // Function to handle hover start
    const handleHoverStart = () => {
        // Animate the card and title when hover starts
        cardControls.start({ y: -20 });
        titleControls.start({ y: -100, opacity: 0.8 });
        textControls.start({ y: -50, opacity: 1, transition: { delay: 0.3 } });
        overlayControls.start({ opacity: 0.5 });
    };

    // Function to handle hover end
    const handleHoverEnd = () => {
        // Animate the card and title back to their initial state when hover ends
        cardControls.start({ y: 0 });
        titleControls.start({ y: 0, opacity: 1 });
        textControls.start({ y: 0, opacity: 0 });
        overlayControls.start({ opacity: 0 });
    };
    useEffect(() => {
        cardControls.start({
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5, type: "spring", damping: 15, stiffness: 100 },
        }); // Start the scale animation when the component is mounted
    }, [cardControls]);

    return (
        <motion.div
            ref={cardRef}
            className={`w-full h-64 relative col-span-3 lg:col-span-${12 / props.dataFull.length}`}
            style={{
                height: cardHeight * 1.35 + "px",
            }}
            // Use onHoverStart and onHoverEnd event handlers
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            animate={cardControls} // Apply animation controls to the card
            initial={{ opacity: 0, scale: 0.25 }} // Set the initial scale to 0
            transition={{ duration: 0.5 }}
        >
            <div className="date absolute bg-blackText-950 z-10 top-4 right-8 text-primaryColor-100 font-semibold font-sans px-8 py-2">
                {props.data.datum}
            </div>
            <motion.div
                className="title z-20 absolute text-white font-headline text-2xl uppercase  bottom-20 left-0 right-0 mx-auto tracking-wider"
                animate={titleControls} // Apply animation controls to the title
            >
                {props.data.akademieTitel}
            </motion.div>
            <motion.div
                className="title z-20 opacity-0 absolute text-white font-headline text-sm   bottom-20 px-8 tracking-wider"
                animate={textControls} // Apply animation controls to the title
            >
                {/* <PortableText value={props.data.headline} /> */}

                {props.data.headline}
            </motion.div>
            <motion.div
                className="bg-primaryColor-950 opacity-0 absolute top-0 w-full h-full z-10"
                animate={overlayControls} // Apply animation controls to the title
            ></motion.div>
            <div className="blackToTransparent h-full w-full absolute top-0 z-10"></div>
            <Image src={urlFor(props.data.image).url()} alt={`Image `} layout="fill" objectFit="cover" />
            <div className="bottom bg-primaryColor-100 px-8 h-16 absolute bottom-0 z-10 w-full flex items-center">
                <div className="topic font-sans font-semibold">{props.data.thema}</div>
                <div className="link"></div>
            </div>
        </motion.div>
    );
};

export default KursCard;

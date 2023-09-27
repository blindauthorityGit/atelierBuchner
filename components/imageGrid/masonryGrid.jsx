import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// FUNCTIONS
import calculateAspectRatio from "../../functions/calculateAspectRatio";
import urlFor from "../../functions/urlFor";

//COMPS
import MasonryElement from "./masonryElement";

const MasonryGrid = (props) => {
    const [data, setData] = useState(null);
    const [slicedData, setSlicedData] = useState(null);

    //PAGINATION
    const [currentPage, setCurrentPage] = useState(0);
    const imagesPerPage = 11; // Number of images per page

    const startIdx = currentPage * imagesPerPage;
    const endIdx = startIdx + imagesPerPage;

    const getRandomImages = () => {
        const shuffledImages = [...props.images].sort(() => 0.5 - Math.random());

        return shuffledImages.slice(0, Math.min(11, shuffledImages.length));
    };
    const randomImages = getRandomImages();

    useEffect(() => {
        const randomArray = [...props.images].sort(() => 0.5 - Math.random());
        setData(randomArray);
        setSlicedData(randomArray.slice(startIdx, endIdx));
    }, [props.images]);

    useEffect(() => {
        // const randomArray = [...props.images].sort(() => 0.5 - Math.random());
        setSlicedData(data?.slice(startIdx, endIdx));
    }, [currentPage, data]);

    useEffect(() => {
        if (props.images.length > 0) {
            console.log(calculateAspectRatio(props.images));
        }
    }, [props.images]);

    // Next page button handler
    const nextPage = () => {
        if (currentPage < Math.ceil(props.images.length / imagesPerPage) - 1) {
            console.log("MEH");
            setCurrentPage(currentPage + 1);
        }
    };

    // Previous page button handler
    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const gridSwitch = (i) => {
        switch (i) {
            case 0:
                console.log(0);
                return "col-span-6 lg:col-span-4 row-span-5";
                break;
            case 1:
                console.log(1);
                return "col-span-6 lg:col-span-4 row-span-5 col-start-1 row-start-6";
                break;
            case 2:
                console.log(2);
                return "col-span-6 lg:col-span-4 row-span-4 col-start-1 lg:col-start-5 row-start-1";
                break;
            case 3:
                console.log(2);
                return "col-span-2 row-span-2 col-start-5 row-start-5";
                break;
            case 4:
                console.log(2);
                return "col-span-2 row-span-2 col-start-7 row-start-8";
                break;
            case 5:
                console.log(2);
                return "col-span-4 row-span-4 col-start-5 row-start-9";
                break;
            case 6:
                console.log(2);
                return "col-span-4 row-span-6 col-start-9 row-start-1";
                break;
            default:
                console.log("The value of i is not 1, 2, or 3");
                return "col-span-2 row-span-2";
                break;
        }
    };

    return (
        // <div className="grid grid-cols-3 gap-4 h-full">
        //     {randomImages.map((image, index) => (
        //         <div key={index} className="relative">
        //             <img
        //                 src={urlFor(image.image).url()}
        //                 alt={`Image ${index}`}
        //                 className="absolute inset-0 w-full h-full object-cover"
        //             />
        //         </div>
        //     ))}
        // </div>
        <>
            <div className="grid grid-cols-12 grid-rows-10 gap-2 h-full">
                {slicedData?.map((e, i) => {
                    gridSwitch(i);
                    return <MasonryElement klasse={gridSwitch(i)} data={e} />;
                })}
            </div>
            <div>
                <button onClick={prevPage} disabled={currentPage === 0}>
                    Previous Page
                </button>
                <button
                    onClick={nextPage}
                    disabled={currentPage === Math.ceil(props.images.length / imagesPerPage) - 1}
                >
                    Next Page
                </button>
            </div>
        </>
    );
};

export default MasonryGrid;

{
    /* <div className="grid grid-cols-12 grid-rows-10 gap-4">
    <div className="col-span-4 row-span-4">1</div>
    <div className="col-span-4 row-span-6 col-start-1 row-start-5">2</div>
    <div className="col-span-4 row-span-3 col-start-5 row-start-1">4</div>
    <div className="col-span-4 row-span-3 col-start-5 row-start-4">5</div>
    <div className="col-span-4 row-span-4 col-start-5 row-start-7">6</div>
    <div className="col-span-4 row-span-5 col-start-9 row-start-1">7</div>
    <div className="col-span-4 row-span-5 col-start-9 row-start-6">8</div>
</div> */
}

// style={{ aspectRatio: calculateAspectRatio(image.dimensions) }}

{
    /* <motion.div
className="col-span-4 row-span-4 relative group overflow-hidden transition-all duration-300"
whileTap={{ scale: 0.95 }}
onMouseOver={(e) => {
    e.currentTarget.children[0].classList.add("scale-in-ver-top");
}}
onMouseLeave={(e) => {
    e.currentTarget.children[0].classList.remove("scale-in-ver-top");
    e.currentTarget.children[0].classList.add("scale-out-ver-top");
}}
>
<div className="text">
   
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
    src={urlFor(randomImages[0].image).url()}
    alt={`Image `}
    // alt={`Image ${data ? data["1/1"][0].image.titel_Bild : null}`}
    layout="fill"
    objectFit="cover"
    className="opacity-0 group-hover:scale-110 transition-all duration-300"
    onLoad={(e) => {
        e.target.classList.remove("opacity-0");
        e.target.classList.add("scale-in-center");
        console.log(e.target, "LOADED");
    }}
    onAnimationEnd={(e) => {
        e.target.classList.remove("scale-in-center");
    }}
/>
</motion.div>
<div className="col-span-4 row-span-6 col-start-1 row-start-5 relative">
<Image
    src={urlFor(randomImages[1].image).url()}
    alt={`Image `}
    // alt={`Image ${data ? data["1/1"][0].image.titel_Bild : null}`}
    layout="fill"
    objectFit="cover"
    className="opacity-0"
    onLoad={(e) => {
        e.target.classList.remove("opacity-0");
        e.target.classList.add("scale-in-center");
        console.log(e.target, "LOADED");
    }}
/>
</div>
<div className="col-span-4 row-span-3 col-start-5 row-start-1 relative">
<Image
    src={urlFor(randomImages[2].image).url()}
    alt={`Image `}
    // alt={`Image ${data ? data["1/1"][0].image.titel_Bild : null}`}
    layout="fill"
    objectFit="cover   "
    className="opacity-0"
    onLoad={(e) => {
        e.target.classList.remove("opacity-0");
        e.target.classList.add("scale-in-center");
        console.log(e.target, "LOADED");
    }}
/>
</div>
<div className="col-span-4 row-span-3 col-start-5 row-start-4 relative">
<Image
    src={urlFor(randomImages[3].image).url()}
    alt={`Image `}
    // alt={`Image ${data ? data["1/1"][0].image.titel_Bild : null}`}
    layout="fill"
    objectFit="cover   "
    className="opacity-0"
    onLoad={(e) => {
        e.target.classList.remove("opacity-0");
        e.target.classList.add("scale-in-center");
        console.log(e.target, "LOADED");
    }}
/>
</div>
<div className="col-span-4 row-span-4 col-start-5 row-start-7 relative">
<Image
    src={urlFor(randomImages[4].image).url()}
    alt={`Image `}
    // alt={`Image ${data ? data["1/1"][0].image.titel_Bild : null}`}
    layout="fill"
    objectFit="cover   "
    className="opacity-0"
    onLoad={(e) => {
        e.target.classList.remove("opacity-0");
        e.target.classList.add("scale-in-center");
        console.log(e.target, "LOADED");
    }}
/>
</div>
<div className="col-span-4 row-span-5 col-start-9 row-start-1 relative">
<Image
    src={urlFor(randomImages[5].image).url()}
    alt={`Image `}
    // alt={`Image ${data ? data["1/1"][0].image.titel_Bild : null}`}
    layout="fill"
    objectFit="cover   "
    className="opacity-0"
    onLoad={(e) => {
        e.target.classList.remove("opacity-0");
        e.target.classList.add("scale-in-center");
        console.log(e.target, "LOADED");
    }}
/>
</div>
<div className="col-span-4 row-span-5 col-start-9 row-start-6 relative">
<Image
    src={urlFor(randomImages[6].image).url()}
    alt={`Image `}
    // alt={`Image ${data ? data["1/1"][0].image.titel_Bild : null}`}
    layout="fill"
    objectFit="cover   "
    className="opacity-0"
    onLoad={(e) => {
        e.target.classList.remove("opacity-0");
        e.target.classList.add("scale-in-center");
        console.log(e.target, "LOADED");
    }}
/>
</div> */
}

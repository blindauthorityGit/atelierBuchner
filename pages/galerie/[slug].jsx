import React, { useEffect, useState } from "react";
import Image from "next/image";
import client, { getAsset } from "../../client";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

//FUNCTIONS
import urlFor from "../../functions/urlFor";

//COMPS
import { ImageInfo } from "../../components/textElements";
import { RadialGradient } from "../../components/layout/bg";
import { RegularGrid } from "../../components/imageGrid";
import Section from "../../components/layout/section";

const ImageSite = ({ post, dataAll }) => {
    const [original, setOriginal] = useState(true);
    // Druck Preis State
    const [druckPreis, setDruckPreis] = useState(0);

    useEffect(() => {
        console.log(post);
    }, []);

    const router = useRouter();

    // Define page transition animations
    const pageVariants = {
        initial: { opacity: 0, scale: 0.25 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring", damping: 15, stiffness: 100 } }, // Adjust damping and stiffness as needed
        exit: { opacity: 0, scale: 0 },
    };

    return (
        <>
            <div className="grid grid-cols-12 grid-rows-10 gap-2 h-[87vh] w-[90vw] max-w-[1680px] max-h-[960px] mt-8 lg:mt-12 mx-auto container mx-auto pt-20">
                <motion.div
                    key={router.query.slug} // Use the pathname as a key for smooth transitions
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    layout="position" // Set layout to "position"
                    className="relative col-span-12 lg:col-span-7"
                    onClick={() => {
                        // router.push("/");
                        console.log(router.pathname, router.query.slug);
                    }}
                >
                    <Image // {...ImagePropsGallery(i)}
                        src={urlFor(post.image).url()}
                        layout="fill"
                        objectFit="contain"
                        alt="hero"
                        className={`z-10 `}
                        onLoad={() => {
                            console.log("LOADED");
                            // setImageLoaded(true);
                        }}
                        priority
                        style={
                            {
                                // transform: `translateX(${x}px) scale(${1 - Math.abs(x) / 1000})`,
                                // opacity: `${1 - Math.abs(x) / 10}`,
                            }
                        }
                    />
                </motion.div>
                <motion.div className="col-span-4">
                    <ImageInfo
                        post={post}
                        original={original}
                        setOriginal={setOriginal}
                        setDruckPreis={setDruckPreis}
                        druckPreis={druckPreis}
                    ></ImageInfo>
                </motion.div>
                {/* '            //IMGGRID */}
            </div>
            <Section>
                <RegularGrid data={dataAll}></RegularGrid>
            </Section>
        </>
    );
};

export default ImageSite;

export const getStaticPaths = async () => {
    const res = await client.fetch(`*[_type in ["Bild"] ]`);
    const data = await res;

    const paths = data.map((e) => {
        return {
            params: { slug: e.slug.current },
        };
    });
    return {
        paths,
        fallback: false,
        // fallback: process.env.NEXT_DEV === "true" ? false : true,
    };
};

export const getStaticProps = async (context) => {
    const slug = context.params.slug;
    const res = await client.fetch(`*[_type == "Bild" && slug.current == "${slug}"] 
    `);
    const data = await res;

    const resAll = await client.fetch(`*[_type in ["Bild"] ]`);
    const dataAll = await resAll;

    return {
        props: {
            post: data[0],
            dataAll,
        },
        revalidate: 1, // 10 seconds
    };
};
